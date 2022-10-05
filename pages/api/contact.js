require("dotenv").config();
const PASSWORD = process.env.PASSWORD;
const OWNEREMAIL = process.env.OWNEREMAIL;
export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "inakilambrechtsadmn@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "inakilambrechtsadmn@gmail.com",
    to: OWNEREMAIL,
    subject: `Message from ${req.body.message.name}`,
    text: req.body.message.message,
    sender: req.body.message.email,
    html: `<div><p>from ${req.body.message.email}: </p><p>${req.body.message.message}</p></div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
