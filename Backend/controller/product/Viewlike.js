const UserModel = require("../../model/UserModel");

async function Viewlike(req,res){
    var user = await UserModel.findOne({email : req.body.email});
   
    if(user){
        var data =  user.likestore;
    
        res.send(data);
    }
    else{
        res.send({
            message : "User not found"
        })
    }
}
module.exports = Viewlike;