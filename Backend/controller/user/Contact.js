const ContactModel = require('../../model/ContactModel');

async function Contact(req,res){

    var data = new ContactModel(req.body);
    await data.save();
    res.send({
        message : "form submit"
    })

}
module.exports = Contact;