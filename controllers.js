
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
        user: 'mainak.dutta16@gmail.com',
        pass: 'eqfmveppenrltmrg'
    }
});

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });


exports.sendMail = async(req,res)=>{
   

    const mailOptions = {
        from: 'gautamds1993@gmail.com',
        to: 'prosenjitetc@gmail.com',
        subject: 'TEST',
        text: 'Email content',
        html: "<h1>This is for testing...</h1>"
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
       console.log(error);
       res.status(500).send(error);
        } else {
          console.log('Email sent: ' + info.response);
          // do something useful
          res.status(200).send(info.response);
        }
      });


          
       
}