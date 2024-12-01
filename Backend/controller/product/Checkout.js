const CheckoutModel = require('../../model/CheckoutModel');

async function Checkout(req,res){
    var data = new CheckoutModel(req.body);
    await data.save();
    res.send({
        message : "CheckOut successfully",
        data
    })
}
module.exports = Checkout;