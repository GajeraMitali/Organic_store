const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    username : String,
    password : String,
    cartstore : [
        { 
            product_name : String,
            product_category : String,
            product_image : String,
            product_description : String,
            product_price : String,
            product_selling_price : String,
            product_qty : Number
        }
    ],
    likestore : [
        {
                    product_name : String,
                    product_category : String,
                    product_image : String,
                    product_overview : String,
                    price : Number,
                    selling_price : Number
        }
    ]
}, {
    timestamps: true
})

const UserModel = mongoose.model('UserModel',UserSchema,'user');

module.exports = UserModel;