const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 4000;

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
    const { user_name, user_password } = req.body;
    pool.query(
        'INSERT INTO users (user_name, user_password) VALUES (?, ?)',
        [user_name, user_password],
        (error, results) => {
            if (error) throw error;
            res.json({ message: 'Signup successful' });
        }
    );
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
