const UserModel = require('../../model/UserModel');

async function Login(req, res) {
    var username = await UserModel.findOne({username : req.body.username});
    var name = await UserModel.findOne({name : req.body.name});
    var password = await UserModel.findOne({password : req.body.password});
    if(username || name){
        if(password){
            res.send({
                message: "Login Successfully"
            })
        }
        else{
            res.send({
                message: "Password Not match"
            })
        }
    }
    else{
        res.send({
            message: "User Not Found"
        })
    }
}

module.exports = Login;