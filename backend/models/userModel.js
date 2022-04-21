const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const Joi = require("joi");



const userSchema = new mongoose.Schema({

    name:{
        type:String,
        require:[true,"Please enter you Name"],
        maxLength:[30, "Name cannot exceed 30 characters"] ,
        minLenght:[4, "Name should have more than 4 characters"]
    },

    email: {
        type:String,
        required:[true,"Please enter your Email"],
        unique:true,
        validator:[validator.isEmail,"Please enter valid email"]


    },

    password:{
        type:String,
        required:[true, "Please Enter your password"],
        minLength:[8,"Password should be greater than 8 characters"],
        select:false 

    },
    avatar:{

        
            public_id : {
                type:String,
                required:false
            },
            url: {
                type:String,
                required: false
            }
        

    },
    role:{
        type:String,
        default: "user"
    },

    resetPasswordToken:String,
    resetPasswordExpire:Date,
    
    createdAt:{
        type:Date,
        default:Date.now
    },
    verified:{
        type:Boolean,
        default:false
    }

    // status: {
    //     type: String, 
    //     enum: ['Pending', 'Active'],
    //     default: 'Pending'
    //   },


});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10);


});

//JWT TOKEN
userSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE, 
    });
}



//Compare Password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}


//Generating reset password token
userSchema.methods.getResetPasswordToken = function(){
    //Generate token 
    const resetToken = crypto.randomBytes(20).toString("hex");


    //Hashing and adding to user schema
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

        this.resetPasswordExpire = Date.now() + 15* 60 * 1000;
        return resetToken;
}


exports.validate = (user) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(255).required(),
      email: Joi.string().email().required(),
    });
    return schema.validate(user);
  };



module.exports = mongoose.model("User", userSchema);


