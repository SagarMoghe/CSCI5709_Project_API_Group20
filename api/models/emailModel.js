//Author - Jigar Makwana B00842568
const nodemailer = require("nodemailer");

module.exports.transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: "ridesharecomp@gmail.com",
        pass: "rideshare@123"
    }
})

//Author - Jigar Makwana B00842568
// @desc helper function to provide password reset link URL
// @access Public
exports.getPasswordResetURL = (userId) =>
    // `http://localhost:3000/resetpassword/${userId}/${token}`
    // `http://localhost:3000/resetpassword/${userId}`
    `https://csci5709webgroup20.herokuapp.com/resetpassword/${userId}`


//Author - Jigar Makwana B00842568
// @desc helper function to provide email template
// @access Public
exports.resetPasswordTemplate = (user, url) => {
    const from = "ridesharecomp@gmail.com"
    const to = user.email
    const subject = "🌻 RideShare Password Reset 🌻"
    const html = `
  <p>Hey ${user.displayName || user.email},</p>
  <p>We are sorry to hear that you have lost your RideShare password.</p>
  <p>But don’t worry! Use the following link to reset your password:</p>
  <a href=${url}>${url}</a>
  <p>See you soon on RideShare!</p>
  `
    return { from, to, subject, html }
}

