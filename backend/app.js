const express = require('express');
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());



//Route Imports

//produt route
const product = require('./routes/productRoute');
app.use("/api/v1", product);


//user route
const user = require("./routes/userRoute");
app.use("/api/v1", user);


//order route
const order = require("./routes/orderRoute");
app.use("/api/v1", order);


//middleware for errors
app.use(errorMiddleware);


//payment route
const payment = require("./routes/paymentRoute");
app.use("/api/v1", payment);

module.exports = app