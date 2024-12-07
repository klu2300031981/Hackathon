// src/components/RegistrationForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './RegistrationForm.css';

const RegistrationForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        // Registration logic (placeholder)
        // For now, assume registration is always successful
        navigate('/login'); // Redirect to Login page
    };

    return (
        <div className="centered-content">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <input type="number" placeholder="Mobile Number" required />

                <button type="submit">Register</button>

                <div className="or-divider">or</div> {/* Added 'or' with styling */}

                <div className="social-login">
                    <button type="button" className="social-button google-button">Register with Google</button>
                    <button type="button" className="social-button facebook-button">Register with Facebook</button>
                </div>
                <div className="reset-password">Already have an account? <a href="/login">Login here!</a></div>
            </form>
        </div>
    );
};

export default RegistrationForm;
