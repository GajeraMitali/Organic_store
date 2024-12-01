const CheckoutModel = require('../../model/CheckoutModel');

async function Checkoutget(req,res){

    var user = await CheckoutModel.findOne({email : req.body.email});
    // console.log("data",user);
    res.send(user);
    
}
module.exports = Checkoutget;