const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
var nodemailer = require('nodemailer');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder

  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
  // });

  app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
  });
}

app.get('/', function(req, res) {
  console.log(process.env.NODE_ENV);
  
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/api/email',(req,res) => {


    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
      service:'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: '', // generated ethereal user
        pass: ''// generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });

    console.log('created');
    // send mail with defined transport object
    transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "northwindapps@gmail.com", // list of receivers
      subject: "Hello,again. ✔", // Subject line
      text: "Hello empty apartment", // plain text body
      html: "<b>Hello music</b>" // html body
    });
});

const port = process.env.PORT || 5001;
app.listen(port, ()=> console.log(`Server started on port ${port}`));
