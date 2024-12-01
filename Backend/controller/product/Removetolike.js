const UserModel = require("../../model/UserModel");

async function Removetolike(req, res) {
    var email = req.body.email;
    var user = await UserModel.findOne({ email: req.body.email });
    var product = req.body.likestore[0];

    if (user) {

        var pname = await user.likestore.find(item => item.product_name == product.product_name);
        var pindex = await user.likestore.findIndex(item => item.product_name == product.product_name);

      
        if (pname) {
            user.likestore.splice(pindex,1);
            var data = await user.save();
            res.send(data);
        }
        else{
            res.send({
                message : "Product not found in like"
            })
        } 
    }
    else {
        res.send("Dont get user")
    }
}
module.exports = Removetolike;