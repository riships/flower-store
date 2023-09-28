const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const nodemailer = require('nodemailer');

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
    const { recipientName, recipientEmail, message, } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'Gmail', 'Yahoo', 'Outlook', etc.
        auth: {
            user: 'avviare.rishi@gmail.com', // your email address
            pass: 'qgcr hpnq rcua ldmr', // your email password or an app-specific password
        },
    });
    // Define the email data
    const mailOptions = {
        from: recipientEmail, // sender's email address
        to: 'avviare.rishi@gmail.com', // recipient's email address
        subject: recipientName, // email subject
        text: message, // plain text body
        // You can also use `html` to send HTML content.
        // html: '<h1>Hello from Node.js</h1><p>This is a test email.</p>',
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


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
