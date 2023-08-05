import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [user_name, setUsername] = useState('');
    const [user_password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        axios
            .post('http://localhost:4000/login', { user_name, user_password })
            .then((response) => {
                console.log(response.data.message);
                setLoggedIn(true);

            })
            .catch((error) => {
                console.error('Login error:', error);
            });
    };
    // useEffect to handle redirection
    useEffect(() => {
        if (loggedIn) {
            // Redirect to the home page after successful login
            window.location.href = '/';
            console.log('success');
        }
    }, [loggedIn]);

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="user_name"
                value={user_name}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={user_password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>

    );
};

export default Login;
