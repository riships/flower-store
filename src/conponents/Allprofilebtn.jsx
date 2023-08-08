import React, { useState } from 'react';
import Login from './Login';

function Allprofilebtn() {
    // Simulating a login state (you should use your own logic to check if the user is logged in)
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Set this to true if the user is logged in
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle the login action
    const handleLogin = () => {
        // Your login logic goes here
        setIsLoggedIn(true);
    };

    // Function to handle the logout action
    const handleLogout = () => {
        // Your logout logic goes here
        setIsLoggedIn(false);
    };
    const handleLoginSubmit = () => {
        // Your login form submit logic goes here
        setIsLoggedIn(true);
        setIsModalOpen(true);
    };

    return (
        <div className="list-unstyled list-inline text-center py-2">
            <div className="list-inline-item">
                <button onClick={handleLogin} className="btn btn-outline-danger btn-rounded" style={{ display: isLoggedIn ? 'none' : 'block' }}>
                    Signup
                </button>
            </div>
            <div className="list-inline-item">
                <button onClick={handleLogout} className="btn btn-outline-danger btn-rounded" style={{ display: isLoggedIn ? 'block' : 'none' }}>
                    Profile
                </button>
            </div>
            <Login
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                onLogin={handleLoginSubmit}
                onClose={() => setIsModalOpen(!isModalOpen)}
            />
        </div>
    );
}

export default Allprofilebtn;
