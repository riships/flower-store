import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import Modal from 'react-modal';

const Login = ({ isOpen, onRequestClose, onLogin }) => {
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
        }
    }, [loggedIn]);

    return (
        <Container>
            <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
                <h2>Login</h2>
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            value={user_name}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={user_password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary"
                        onClick={handleLogin}>
                        Login
                    </Button>
                </Form>

            </Modal>
            <Button variant="primary"
                onClick={onLogin}>
                Login
            </Button>
        </Container>

    );
};

export default Login;
