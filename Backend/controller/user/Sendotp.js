
const nodemailer = require('nodemailer');


async function Sendotp(req,res){
  
    var otp = Math.floor(Math.random()*9999);
    console.log("otp",otp);
    const transport = nodemailer.createTransport({
        host : "smtp.gmail.com",
        port: 465,
        secure: true,
        tls: {
            rejectUnauthorized: false
        },
        auth : {
            user : "mitaligajera229@gmail.com",
            pass : "yhcm ymla uclm gryw"
        }
    
    })
    var mailoption = {
        from : "mitaligajera229@gmail.com",
        to :    `${req.body.email}`,
        subject : "OTP Verification",
        text : `Your otp is ${otp} valid for 1 minute only..`
    }
    
    transport.sendMail(mailoption, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("email has been sent", info.response);
           
        }
    });

    res.send({
        message : "Otp Send Successfully to your mail.",
        otp
    })
  
}
module.exports = Sendotp;
