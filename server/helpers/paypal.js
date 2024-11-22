// const paypal=require('paypal-rest-sdk');

// paypal.configure({
//     mode:'sandbox',
//     client_id:process.env.PAYPAL_CLIENT_ID,
//     client_secret:process.env.PAYPAL_SECRET_ID,
// });


// module.exports=paypal;
const Razorpay = require("razorpay");

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Fetch from .env
  key_secret: process.env.RAZORPAY_SECRET_KEY, // Fetch from .env
});

module.exports = razorpayInstance;
