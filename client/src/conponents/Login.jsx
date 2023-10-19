import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Card } from 'react-bootstrap';
import Modal from 'react-modal';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Signup from './Signup';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Login = ({ isOpen, onRequestClose, onLogin, onClose }) => {
    const [user_name, setUsername] = useState('');
    const [user_password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoginMode, setLoginMode] = useState(true);



    const handleLogin = () => {
        if (!user_name || !user_password) {
            console.error('Username and password are required');
            return; // Don't proceed with the login request
        }
        axios
            .post('http://localhost:4000/login', { user_name, user_password }, {
                timeout: 5000, // Set a 5-second timeout (adjust as needed)
            })
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
        <>
            <Modal
                style={customStyles}
                isOpen={isOpen}
                onRequestClose={onRequestClose}>
                <RxCross1
                    onClick={onClose}
                />
                <Card.Body>
                    {isLoginMode ? (
                        <div className="mb-3 mt-md-4">
                            <div className="mb-3">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-center">
                                            Username
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            value={user_name}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required />
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={user_password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicCheckbox"
                                    >
                                        <p className="small">
                                            <a className="text-primary" href="#!">
                                                Forgot password?
                                            </a>
                                        </p>
                                    </Form.Group>
                                    <div className="d-grid">
                                        <Button variant="primary" type="submit"
                                            onClick={handleLogin}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    ) : (

                        // Signup form
                        <Signup
                            onSignupSuccess={() => {
                                // Handle signup success, e.g., redirect or show a message
                                setLoginMode(true); // Switch back to login mode
                            }}
                        />
                    )}
                    <div className="mt-3">
                        <p className="mb-0 text-center">
                            {isLoginMode ? (
                                <>
                                    Don't have an account?{' '}
                                    <span
                                        className="text-primary fw-bold cursor-pointer"
                                        onClick={() => setLoginMode(false)}
                                    >
                                        Sign Up
                                    </span>
                                </>
                            ) : (
                                <>
                                    Already have an account?{' '}
                                    <span
                                        className="text-primary fw-bold cursor-pointer"
                                            onClick={() => setLoginMode(true)}                                    >
                                        Log In
                                    </span>
                                </>
                            )}
                        </p>
                    </div>
                </Card.Body>
            </Modal>
            <div className="mnu_link cart-trolley--link">
                <Link
                    onClick={onLogin}>
                    Login
                </Link>
            </div>
        </>

    );
};

export default Login;
