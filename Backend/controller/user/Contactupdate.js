const ContactModel = require('../../model/ContactModel');

async function Contactupdate(req,res) {
        var data = await ContactModel.updateOne(
            {email : req.params.email},
            {$set :req.body}
        )
        
        res.send({
            message : "Inquiry Done"
        })
}
module.exports = Contactupdate;