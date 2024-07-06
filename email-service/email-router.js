const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ejemplo@gmail.com', 
        pass: 'contraseña', 
    },
});


router.post('/send-welcome-email', (req, res) => {
    const { email, name } = req.body;

    if (!email || !name) {
        return res.status(400).send('Email and name are required');
    }

    const mailOptions = {
        from: 'example@gmail.com',
        to: email,
        subject: 'Welcome to Our Service!',
        text: `Hello ${name},\n\nWelcome to our service! We are glad to have you on board.\n\nBest regards,\nYour Company`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.message);
        }
        res.status(200).send('Welcome email sent successfully to ' + email);
    });
});

module.exports = router;
