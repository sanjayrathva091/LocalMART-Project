const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async (email, subject, url, name) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: process.env.EMAIL_PORT,
      secure: process.env.SECURE,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    await transporter.sendMail({
      from: '"LocalMART", <localmart@gmail.com>',
      to: email,
      subject: subject,
      html: `
      <p style="font-weight:bold;">Hello, ${name}</p>
      <p>Are you ready to gain access to all of the assets we prepared for customer's of LocalMART.</p>
      <p>First, you must complete your registration by clicking on the button below:</p>
      <button style="padding:5px; font-size:20px; cursor:pointer; border-radius:10px; border:none; background-color:DodgerBlue;"><a href=${url} style="text-decoration:none; color:black;">Verify Now</a></button>
      <p>This link will verify your email address, and then you’ll officially be a part of the LocalMART company.</p>
      <p>See you there!</p>
      <p>Best regards, the LocalMART team</p>
      `,
    });

    console.log({ message: "Email Sent Successfully!" });
  } catch (error) {
    console.log({ message: "Email Not Sent", error });
  }
};
