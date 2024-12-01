const AdminModel = require('../../model/AdminModel');

async function GetAdmin(req,res){

    var data = await AdminModel.findOne({username : req.body.username});
    res.send(data);

}
module.exports = GetAdmin;