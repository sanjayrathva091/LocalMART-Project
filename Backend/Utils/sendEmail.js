const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 578,
      secure: false,
      auth: {
        user: "avi.avinashhhh@gmail.com",
        pass: "sseqphfolbvkkmdr",
      },
    });
    await transporter.sendMail({
      from: '"LocalMART 👻" <localmart@gmail.com>',
      to: email,
      subject: subject,
      text: text,
    });

    console.log({ message: "Email Sent Successfully!" });
  } catch (error) {
    console.log({ message: "Email Not Sent", error });
  }
};
