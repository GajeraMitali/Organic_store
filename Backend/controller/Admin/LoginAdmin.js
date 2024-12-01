const AdminModel = require('../../model/AdminModel');

async function LoginAdmin(req, res) {
    var username = await AdminModel.findOne({username : req.body.username});
    var name = await AdminModel.findOne({name : req.body.name});
    var password = await AdminModel.findOne({password : req.body.password});
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

module.exports = LoginAdmin;