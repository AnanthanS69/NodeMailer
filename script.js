const nodemailer=require('nodemailer');
const transporter= nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'ananthan.s1969@gmail.com',
        password: 'password'
    }
});
const mailOptions = {
    from: 'ananthan.s1969@gmail.com',
    to: 'Password',
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

