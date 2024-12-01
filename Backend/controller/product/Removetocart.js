const UserModel = require("../../model/UserModel");

async function Removetocart(req, res) {
    var email = req.body.email;
    var user = await UserModel.findOne({ email: req.body.email });
    var product = req.body.cartstore[0];

    if (user) {

        var pname = await user.cartstore.find(item => item.product_name == product.product_name);
        var pindex = await user.cartstore.findIndex(item => item.product_name == product.product_name);

     
        if (pname) {
          if(pname.product_qty > 0){
            pname.product_qty -= 1;
          }
          else{
            user.cartstore.splice(pindex,1);
          }
          var data = await user.save();
        res.send(data);
        }
        else{
            res.send({
                message : "Product not found in cart"
            })
        } 
    }
    else {
        res.send("Dont get user")
    }
}
module.exports = Removetocart;