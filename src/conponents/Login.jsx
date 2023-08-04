import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [user_name, setUsername] = useState('');
    const [user_password, setPassword] = useState('');

    const handleLogin = () => {
        axios
            .post('http://localhost:4000/login', { user_name, user_password })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error('Login error:', error);
            });
    };

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
