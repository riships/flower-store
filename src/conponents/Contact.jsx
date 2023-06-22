import React from 'react';
import '../stylesheets/contact.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Contact() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        website: Yup.string().url('Invalid website URL').required('Website is required'),
        message: Yup.string().required('Message is required'),
    });

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            // Make an API request to the backend server
            await axios.post('/api/contact', values);

            // Reset the form and display a success message
            setSubmitting(false);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            // Display an error message or handle the error gracefully
        }
    };


    return (
        <div>
            <div className="container--contact">
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    <Form id="contact">
                        <h3>Quick Contact</h3>
                        <h4>Contact us today, and get a reply within 24 hours!</h4>
                        <fieldset>
                            <Field
                                placeholder="Your name"
                                id="name"
                                type="text"
                                name="name"
                                tabIndex="1"
                                required
                            />
                            <ErrorMessage name="name" component="div" />
                        </fieldset>
                        <fieldset>
                            <Field
                                id="email"
                                placeholder="Your Email Address"
                                type="email"
                                name="email"
                                tabIndex="2"
                                required
                            />
                            <ErrorMessage name="email" component="div" />
                        </fieldset>
                        <fieldset>
                            <Field
                                id="phone"
                                placeholder="Your Phone Number"
                                type="text"
                                name="phone"
                                tabIndex="3"
                                required
                            />
                            <ErrorMessage name="phone" component="div" />
                        </fieldset>
                        <fieldset>
                            <Field
                                placeholder="Your Web Site starts with http://"
                                id="website"
                                type="url"
                                name="website"
                                tabIndex="4"
                                required
                            />
                            <ErrorMessage name="website" component="div" />
                        </fieldset>
                        <fieldset>
                            <Field
                                as="textarea"
                                id="message"
                                placeholder="Type your Message Here...."
                                tabIndex="5"
                                name="message"
                                required
                            />
                            <ErrorMessage name="message" component="div" />
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">
                                Submit
                            </button>
                        </fieldset>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Contact;
