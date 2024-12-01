const UserModel = require('../../model/UserModel');

async function Deletecart(req,res){
    var user = await UserModel.findOne({email : req.body.email});
    var existproduct = user.cartstore;
    var newproduct = req.body.cartstore[0];
    var deletep = existproduct.findIndex(item=>item.product_name === newproduct.product_name);
    console.log(user.cartstore);

    if(!user){

    }
    else{
        if(deletep !== -1){
            user.cartstore.splice(deletep,1);
            await user.save();
            res.send({
                message : "Product Delete From Cart"
            });
        }
        else{
            res.send({
                message : "Product Not Found"
            })
        }
    }

    
// if(user){
//               user.cartstore.splice(deletep,1);
// }
// const data = await user.save();
// res.send(data);

}
module.exports = Deletecart;