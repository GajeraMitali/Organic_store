const CheckoutModel = require('../../model/CheckoutModel');

async function AllOrderDetail(req,res){

    var data = await CheckoutModel.find();
    res.send(data);
    
}
module.exports = AllOrderDetail;