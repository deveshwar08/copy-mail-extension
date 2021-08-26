const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: "29b03d4505d7c8",
        pass: "a119685f4ca0c0"
    }
});

app.post('/send-mail',(req, res) => {
    const message = req.body.clipboardContent;
    try {
        const message = req.body.clipboardContent;
        console.log(req.body);
        const mailContent = {
            from: 'elonmusk@tesla.com', 
            to: 'deveshwar00@gmail.com',         
            subject: 'Clipboard data', 
            html: `<h3>Your clipboard data</h3><br/><p>${message}</p><br/><h4>Enjoy your day</h4>`
        };
        transport.sendMail(mailContent, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
            }
        });
        res.json("Email sent");
    } catch (err) {
        console.log(err);
    }
});

app.listen(2000);