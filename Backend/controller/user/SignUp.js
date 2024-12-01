const UserModel = require('../../model/UserModel');

async function SignUp(req, res) {
    var email = req.body.email;
    var username = req.body.username;

    var student = await UserModel.findOne({ 
        $or: [
            { email: email },
            {username : username}
        ]
    });

    if (student == null) {
        var data = new UserModel(req.body);
        await data.save();
        res.send({
            message: "User Register..."
        });
    } else {
        res.send({
            message: "User Already Exists.."
        });
    }
}

module.exports = SignUp;