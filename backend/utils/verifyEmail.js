const nodemailer = require("nodemailer");

const verifyEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMPT_HOST,
      service: process.env.SMPT_SERVICE,
      port: process.env.SMPT_PORT,
      secure: true,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    });
    console.log("Email sent sucessfully");
  } catch (error) {
    console.log("Email not sent");
    console.log(error);
  }
};

module.exports = verifyEmail;