import React from 'react';
// import '../stylesheets/login.css'; // Import the same CSS file as your login page
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button } from 'react-bootstrap'; // Import Bootstrap components

function SignupPage() {
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('http://localhost:4000/signup', values);
            if (response.status === 200) {
                alert('Signup successful');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Signup failed');
        }
    };

    return (
        <div>
            <div className="login-container">
                <div className="login-form">
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                        <Form>
                            <h3>Signup</h3>
                            <div className="form-group">
                                <Field
                                    placeholder="Username"
                                    type="text"
                                    name="username"
                                    className="form-control"
                                />
                                <ErrorMessage className="text-danger" name="username" component="div" />
                            </div>
                            <div className="form-group">
                                <Field
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    className="form-control"
                                />
                                <ErrorMessage className="text-danger" name="email" component="div" />
                            </div>
                            <div className="form-group">
                                <Field
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    className="form-control"
                                />
                                <ErrorMessage className="text-danger" name="password" component="div" />
                            </div>
                            <Button type="submit" className="btn btn-primary btn-block">Sign Up</Button> {/* Use Bootstrap Button */}
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
