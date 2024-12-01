const UserModel = require('../../model/UserModel');

async function Addtolike(req, res) {
    var email = req.body.email;
    var user = await UserModel.findOne({ email: req.body.email });
    var product = req.body.likestore[0];


    if (user) {

        var pname = await user.likestore.find(item => item.product_name == product.product_name);
       
        if (pname) {
         res.send({
            message:"Product already like"
         })
        }
        else {
           user.likestore.push(product);
           var data = await user.save();
           res.send(data);
        }
       
    }
    else {
        res.send("Dont get user")
    }
}
module.exports = Addtolike;