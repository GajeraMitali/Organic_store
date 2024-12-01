const mongoose = require('mongoose');

const checkoutSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    companyName : String,
    country : String,
    address : String,
    city : String,
    state : String,
    pincode : Number,
    phone : Number,
    email : String,
    orderDetail : Array,
    total:Number,
    paymentMode : String,
    orderno : Number,
    orderDate : String
})

const CheckoutModel = mongoose.model('CheckoutModel',checkoutSchema,'checkout')
module.exports = CheckoutModel;