const nodemailer = require("nodemailer");

// transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// verify connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email server error:", error);
  } else {
    console.log("✅ Email server ready");
  }
});

// send email function (FIXED)
const sendEmail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: `"Your App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html, // ✅ important
    });

    console.log("✅ Email sent");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

module.exports = sendEmail;