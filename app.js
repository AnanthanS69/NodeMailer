const nodemailer=require('nodemailer');
const transporter= nodemailer.createTransport({
    service:'outlook',
    auth:{
        user:'email',
        pass: 'pwd'
    }
});
const mailOptions = {
    from: 'Email',
    to: 'Recipient-email',
    subject: 'Hello Friends!',
    text: 'Hey friends, this is an email sent using nodemailer.'
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });

