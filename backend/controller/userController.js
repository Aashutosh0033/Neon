const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken')
const Token = require("../models/token");
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto");
const { json } = require("express/lib/response");
const validate = require('../models/userModel');




//Register a user
exports. registerUser = catchAsyncErrors( async (req,res,next) =>{
    const {name,email,password} = req.body;

//Get verify email token
    try {
        const { error } = validate(req.body);
        if (error) return next(new ErrorHandler(error.details[0].message,400));
    
        let user = await User.findOne({ email: req.body.email });
        if (user) return next(new ErrorHandler("User with given email already exist!",400));
          
         user = await new User({
            name: req.body.name,
            email: req.body.email,
            password : req.body.password
          }).save();
       
    
        let token = await new Token({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        }).save({ validateBeforeSave : false});
    
        const message = `${req.protocol}://${req.get("host")}/api/v1/register/verify/${user.id}/${token.token}`;
        

      
        await sendEmail({
            email:user.email,
            subject:"Neon Email Verification",
            message,
        });

            res.status(200).json({
            success:true,
            message: `Email sent to ${user.email} successfully`,

        });

   }catch(error){
       

       return next(new ErrorHandler(error.message, 500));

    }

});


//VeriFy Email
exports.verifyUserEmail = catchAsyncErrors( async (req, res, next) =>{

    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send("Invalid link");
        
        
        const token = await Token.findOne({
          userId: user._id,
          token: req.params.token,
        });
        
        if (!token) return res.status(400).send("Invalid link");
    
       


        const newUserData = {
            verified:true
        }
    
        
        await User.findByIdAndUpdate(req.params.id,newUserData,{
           new:true,
           runValidators:true,
           useFindAndModify:false
       });

        await Token.findByIdAndRemove(token._id);
    

        
        
        res.status(200).json({
            success:true,
            message: "Email verified sucessfully",

        });
        

        

      }catch(error) {
        
          res.status(400).json({
              success:false,
              message: `An error occured ${error}`,
  
          });

      }
    
});




//Login user
exports.loginUser = catchAsyncErrors (async (req,res,next)=>{

    const {email, password, verified} = req.body;

    //checking if user has given password and email both

    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email and Password", 400));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email or password",401));

    }

    



    const isPasswordMatched = await user.comparePassword(password);


    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401));

    }


    if(verified == false){
        return next(new ErrorHandler("Email not verified",401));

    }

   

    sendToken(user, 200, res);


 });


 //Logout User

 exports.logout = catchAsyncErrors(async(req,res,next)=>{
     res.cookie("token", null,{
         expires: new Date(Date.now()), 
         httpOnly:true,
     });


     res.status(200).json({
         success:true,
         message:"Logged Out"
     });
 });
      
 
 //Forgot Password

 exports.forgotPassword = catchAsyncErrors(async (req,res,next)=>{

    const user = await User.findOne({email : req.body.email});

    if(!user){
         return next(new ErrorHandler("User not found", 404));
    }

    //Get ResetPassword token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave : false});

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`

    const message = `Your  password reset token is :- \n\n${resetPasswordUrl}\n\nIf you have not requested this email then please ignore it.`;


    try{
        await sendEmail({
            email:user.email,
            subject:"Neon Password Recovery",
            message,
        });

            res.status(200).json({
            success:true,
            message: `Email sent to ${user.email} successfully`,

        });
            

    }catch(error){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave:false});

        return next(new ErrorHandler(error.message, 500));
    }
 });



 //Reset Password
 exports.resetPassword = catchAsyncErrors(async (req, res, next)=>{

    //creating token hash
    const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");


    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now()},

    });

    if(!user){
        return next(new ErrorHandler("Reset Password token isn't valid or has been expired", 400))

    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Password doesn't match ", 400));

    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    
    sendToken(user, 200 , res);
 });



 //Get user details
 exports.getUserDetails = catchAsyncErrors(async (req, res , next) =>{
     const user = await User.findById(req.user.id);


     res.status(200).json({
         success:true,
         user
     });
 });


  //Update user password
  exports.updatePassword = catchAsyncErrors(async (req, res , next) =>{
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);


    if(!isPasswordMatched){
        return next(new ErrorHandler("Old password is incorrect",400));

    }

    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler("Password doesn't match",400));
    }

    user.password = req.body.newPassword;
    await user.save();


    sendToken(user,200, res);
});




  //Update user profile
  exports.updateProfile = catchAsyncErrors(async (req, res , next) =>{
    
    
    const newUserData = {
        name:req.body.name,
        email:req.body.email
    }

    //we will add cloudinary later

    const user = await User.findByIdAndUpdate(req.user.id,newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });


    res.status(200).json({
        success:true
    });


    
});


//Get all users(admin)
exports.getAllUsers = catchAsyncErrors(async(req,res,next)=>{

    const users = await User.find();
    
    res.status(200).json({
        success:true,
        users,
    });
});


//Get single users(admin)
exports.getSingleUser= catchAsyncErrors(async(req,res,next)=>{

    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`User does not exist with id: ${req.params.id}`));
    }
    
    res.status(200).json({
        success:true,
        user,
    });
});



  //Update user Role --admin
  exports.updateUserRole = catchAsyncErrors(async (req, res , next) =>{
    
    
    const newUserData = {
        name:req.body.name,
        email:req.body.email,
        role:req.body.role
    }

   

    const user = await User.findByIdAndUpdate(req.params.id,newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });


    res.status(200).json({
        success:true
    });


    
});




  //Delete User --admin
  exports.deleteUser = catchAsyncErrors(async (req, res , next) =>{
    
    
 
    const user = await User.findById(req.params.id);
    
    //we will remove cloudinary later

    if(!user){
        return next(new ErrorHandler(`User does not exist with id:${req.params.id}`))
    }


    user.remove();
    res.status(200).json({
        success:true,
        message:"User deleted successfully"
    });


    
});


