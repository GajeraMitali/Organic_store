const ProductModel = require('../../model/ProductModel');

async function Updateproduct(req,res){
    var data = await ProductModel.updateOne(
        {product_name : req.params.product_name},
        {$set : req.body}
    )
    // await data.save();
    res.send({
        message : "Product Update",data
    })
}
module.exports = Updateproduct;