const ProductModel = require('../../model/ProductModel');

async function AddProduct(req,res){
   try{
        var data = new ProductModel(req.body);
        await data.save();
        res.status(201).json({
            message: "Product upload successfully",
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


module.exports = AddProduct;