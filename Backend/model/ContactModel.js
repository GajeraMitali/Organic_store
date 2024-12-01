const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name : String,
    email : String,
    contact : Number,
    message : String,
    read :  {type : Boolean,default:false}
})

const ContactModel = mongoose.model('ContactModel',contactSchema,'contact');
module.exports = ContactModel;