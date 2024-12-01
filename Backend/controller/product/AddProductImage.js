// const imgpath = require('../../../Frontend/organic/src/images')
const multer = require('multer');

const upload = multer({
    storage : multer.diskStorage({
        destination : function (req,file,cb){
            cb(null,"Product_images")
        },
        filename : function(req,file,cb){
            cb(null,file.originalname);
        }
    })
}).single("product_image");

module.exports = upload;
