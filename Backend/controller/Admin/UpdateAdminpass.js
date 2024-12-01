const AdminModel = require('../../model/AdminModel');

async function Updateadminpass(req,res){

    var data = await AdminModel.updateOne(
        {email : req.params.email},
        {$set : req.body}
    )
    res.send({
        message : "Password Update Successfully",
        data
    });
}
module.exports = Updateadminpass;