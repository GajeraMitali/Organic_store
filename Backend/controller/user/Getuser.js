const UserModel = require('../../model/UserModel');

async function Getuser(req,res){

    var data = await UserModel.findOne({username : req.body.username});
    res.send(data);

}
module.exports = Getuser;