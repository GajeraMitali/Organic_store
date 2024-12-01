const UserModel = require('../../model/UserModel');

async function Updatepassword(req,res){

    var data = await UserModel.updateOne(
        {email : req.params.email},
        {$set : req.body}
    )
    res.send({
        message : "Password Update Successfully",
        data
    });
}
module.exports = Updatepassword;