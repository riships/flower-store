const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const app = express();
const port = 4000;

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL pool to handle connections
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'rishi',
    database: 'mydatabase',
});

// Login endpoint
app.post('/login', (req, res) => {
    const { user_name, user_password } = req.body;
    pool.query(
        'SELECT * FROM users WHERE user_name = ? AND user_password = ?',
        [user_name, user_password],
        (error, results) => {
            if (error) throw error;
            if (results.length === 1) {
                res.json({ message: 'Login successful' });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        }
    );
});

// Signup endpoint
app.post('/signup', (req, res) => {
    const { user_name, user_password, email_id } = req.body;
    pool.query(
        'INSERT INTO users (user_name, email_id, user_password) VALUES (?, ?, ?)',
        [user_name, user_password, email_id],
        (error, results) => {
            if (results.length === 1) {
                res.json({ message: 'Signup successful' });
            } else {
                res.status(401).json({ message: 'Enter valid Details' });
            }
        }
    );
});
app.post('/send-email', (req, res) => {
    const { name, email, message, phone, website } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'Gmail', 'Yahoo', 'Outlook', etc.
        auth: {
            user: 'avviare.rishi@gmail.com', // your email address
            pass: 'qgcr hpnq rcua ldmr', // your email password or an app-specific password
        },
    });
    // Define the email data
    const mailOptions = {
        from: email, // sender's email address
        to: 'avviare.rishi@gmail.com', // recipient's email address
        subject: 'Mail From My React Flower Store', // email subject
        html: `<p>Hello ${name},<br>${message}</p><p>My Conact No.: ${phone}<br>Website: ${website}</p>`, // plain text body

    };

    // Your Nodemailer code here to send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

    res.json({ message: 'Email sent successfully' });
});
// Your Twilio credentials
// const accountSid = 'AC0a6475745c5a561325c1539bee57ab03';
// const authToken = '01dd255ec4f178c58ede751ec3dc2e4f';

// const client = twilio(accountSid, authToken);

// // Send an SMS
// client.messages
//     .create({
//         body: 'Hello, this is a test SMS!',
//         from: '9315265049',
//         to: '+919315265049',
//     })
//     .then((message) => console.log('SMS sent:', message.sid))
//     .catch((error) => console.error('Error sending SMS:', error));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
