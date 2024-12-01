const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    product_name : String,
    product_category : String,
    product_image : String,
    product_description : String,
    product_price : Number,
    product_selling_price : Number,
    product_image_name : String
},{
    timestamps : true
})

const ProductModel = mongoose.model('ProductModel',ProductSchema,'product');

module.exports = ProductModel;