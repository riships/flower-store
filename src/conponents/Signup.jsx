import React, { useState } from 'react';

function SignupPage() {
    // Create state variables to store form data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(...formData); 
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you can send the form data to your backend for processing
        // using an HTTP POST request (e.g., with Axios or the Fetch API).

        // For example:
        fetch('http://localhost:4000/signup', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server (e.g., success or error messages)
                console.log(data);
            })

            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button onClick={handleSubmit} type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupPage;
