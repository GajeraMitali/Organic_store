const UserModel = require('../../model/UserModel');

async function Addtocart(req, res) {
    var user = await UserModel.findOne({ email: req.body.email });
    var product = req.body.cartstore[0];

    if (user) {

        var pname = await user.cartstore.find(item => item.product_name == product.product_name);
      
        if (pname) {
           pname.product_qty += 1;
        }
        else {
           user.cartstore.push(product);
        }
        var data = await user.save();
        res.send(data);
    }
    else {
        res.send("Dont get user")
    }
}
module.exports = Addtocart;