const ProductModel = require('../../model/ProductModel');

async function Deleteproduct(req,res){
    var data = await ProductModel.deleteOne(
        {product_name : req.params.product_name}
    )
    // await data.save();
    res.send({
        message : "Product Delete",data
    })
}
module.exports = Deleteproduct;