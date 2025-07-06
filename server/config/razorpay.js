// const Razorpay = require("razorpay");


// exports.instance = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY,
//     key_secret: process.env.RAZORPAY_SECRET,
// });


const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

module.exports = instance;
