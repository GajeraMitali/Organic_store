const ContactModel = require('../../model/ContactModel');

async function Contactget(req,res) {
        var data = await ContactModel.find();
        res.send(data);
}
module.exports = Contactget;