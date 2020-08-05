require("dotenv").config();

const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN,
  },
};

let transporter = nodemailer.createTransport(mailGun(auth));

let mailOptions = {
  from: "chaudharyaniket16@gmail.com", //email sender
  to: "chaudharyaniket16@gmail.com", //email receiver
  subject: "Nodemailer - Test",
  text: "Sendiong Email!!",
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    return console.log("Error occurs");
  }
  return console.log("Email sent!!!");
});
