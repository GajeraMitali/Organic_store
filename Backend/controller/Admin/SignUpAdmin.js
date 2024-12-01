const AdminModel = require('../../model/AdminModel');

async function SignUpAdmin(req, res) {
    var email = req.body.email;
    var username = req.body.username;

    var student = await AdminModel.findOne({ 
        $or: [
            { email: email },
            {username : username}
        ]
    });

    if (student == null) {
        var data = new AdminModel(req.body);
        await data.save();
        res.send({
            message: "Admin Register..."
        });
    } else {
        res.send({
            message: "Admin Already Exists.."
        });
    }
}

module.exports = SignUpAdmin;