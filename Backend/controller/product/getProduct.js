const ProductModel = require('../../model/ProductModel');

async function getProduct(req,res){
    try{
        var data = await ProductModel.find();
        res.status(201).json({
            message: "Product Fetch successfully",
            error: false,
            success: true,
            data: data
        });
   }
   catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
   }
}

module.exports = getProduct;