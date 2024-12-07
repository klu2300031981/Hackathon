// src/components/RegisterSession.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RegisterSession.css'; // Optional: Add CSS for styling

const RegisterSession = () => {
    const { sessionId } = useParams(); // Get the session ID from the URL
    const navigate = useNavigate(); // For navigation after form submission
    const [formData, setFormData] = useState({ name: '', id: '' }); // State for form data
    const [sessionDetails, setSessionDetails] = useState(null); // State for session details

    // Sample session data - ideally fetched from an API or similar
    useEffect(() => {
        // Replace this with actual fetch logic as needed
        const fetchSessionDetails = () => {
            const sessionData = {
                id: sessionId,
                name: 'Virtual Networking Tips', // Example name
                date: '2024-10-10', // Example date
                time: '3:00 PM', // Example time
            };
            setSessionDetails(sessionData);
        };

        fetchSessionDetails();
    }, [sessionId]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registered for Session: ${sessionDetails.name}\nID: ${formData.id}\nDate: ${sessionDetails.date}\nTime: ${sessionDetails.time}\nName: ${formData.name}`);
        navigate('/'); // Redirect back to the home page after submission
    };

    // Show a loading state or message while session details are being fetched
    if (!sessionDetails) {
        return <div>Loading...</div>; // Optional loading state
    }

    return (
        <div className="register-session">
            <h3>Register for Session: {sessionDetails.name}</h3>
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
                <label>
                    Date:
                    <input
                        type="text"
                        name="date"
                        value={sessionDetails.date}
                        readOnly
                    />
                </label>
                <label>
                    Time:
                    <input
                        type="text"
                        name="time"
                        value={sessionDetails.time}
                        readOnly
                    />
                </label>
                <button type="submit" className="register-btn">
                    Register
                </button>
            </form>
        </div>
        
    );
};

export default RegisterSession;
