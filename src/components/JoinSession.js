// src/components/JoinSession.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useParams to get the session ID from URL
import './JoinSession.css'; // You can style this separately

const JoinSession = () => {
    const { sessionId } = useParams(); // Get the session ID from the URL
    const navigate = useNavigate(); // For navigating after form submission
    const [formData, setFormData] = useState({ name: '', id: '' }); // State for form data

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Joining Session ID: ${sessionId} with Name: ${formData.name} and ID: ${formData.id}`);
        navigate('/'); // Redirect back to the home page after submission
    };

    return (
        <div className="join-session">
            <h3>Join Session </h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    ID:
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit" className="join-btn">
                    Join
                </button>
            </form>
        </div>
    );
};

export default JoinSession;
