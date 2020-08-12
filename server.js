const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const { body, check, validationResult } = require('express-validator');

require('dotenv').config();

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 5288;


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req,res) => {
   res.sendFile('index');
});

app.get('/works', (req,res)=>{
    res.sendFile(`${process.cwd()}/views/works.html`);
 });

 
 app.post('/path/message',[
       //  check('email').not().isEmpty().trim().escape(),
       body('email').not().isEmpty().withMessage('Fill in your emaii'),
       body('email').isEmail().withMessage('Not a valid email'),
//        body('name').not().isEmpty().withMessage('Fill in your name'),
//        body('name').custom((value,{req}) => {
//             if(value){
//               return 'message is working';
//             }
// }).withMessage('Name is active at this momemnt'),
       body('message').not().isEmpty().withMessage('Fill in your message')
 ],(req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.json({ errors: errors.array() });
  }else{

    let temp = `
    <h3>${req.body.email}</h3>
    <h4>${req.body.name}</h4>
    <p>${req.body.message}</p>
 `;
    //console.log(req.body);
    main(temp).catch(console.error);
  }


 }); 


async function main(temp) {

  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, 
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to: process.env.HOST, // list of receivers
    subject: "Message from my Portfolio Website", // Subject line
    text: "not text yet", // plain text body
    html: temp, // html body
  });

//  console.log("Message sent: %s", info.messageId);
  console.log('Message sent');
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}


 app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
});