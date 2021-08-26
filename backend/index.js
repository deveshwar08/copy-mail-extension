require('dotenv').config();
const mailjet = require('node-mailjet')
    .connect(process.env.domain, process.env.key);
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/send-mail', (req, res) => {
    const message = req.body.clipboardContent;
    const receiverMail = req.body.email;
    console.log("Mailing trying");
    try {
        const request = mailjet
            .post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": "deveshwar00@gmail.com",
                            "Name": "Your PC"
                        },
                        "To": [
                            {
                                "Email": receiverMail,
                                "Name": "Deveshwar"
                            }
                        ],
                        "Subject": "Your clipboard",
                        "TextPart": "Clipboard Data",
                        "HTMLPart": "<h3>Your clipboard</h3><br />"+message,
                        "CustomID": "AppGettingStartedTest"
                    }
                ]
            })
        request
            .then((result) => {
                console.log(result.body)
            })
            .catch((err) => {
                console.log(err.statusCode)
            })
        res.json("Email sent");
    } catch (err) {
        console.log(err);
    }
});

app.listen(2000);