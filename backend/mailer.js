const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'Gmail', 'Yahoo', 'Outlook', etc.
    auth: {
        user: 'avviare.rishi@gmail.com', // your email address
        pass: 'qgcr hpnq rcua ldmr', // your email password or an app-specific password
    },
});

// Define the email data
const mailOptions = {
    from: 'rishi.edunext@gmail.com', // sender's email address
    to: 'avviare.rishi@gmail.com', // recipient's email address
    subject: 'Hello from Node.js', // email subject
    text: 'This is a test email sent from Node.js.', // plain text body
    // You can also use `html` to send HTML content.
    // html: '<h1>Hello from Node.js</h1><p>This is a test email.</p>',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
