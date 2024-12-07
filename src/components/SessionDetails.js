// src/components/SessionDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SessionDetail.css';

const SessionDetail = () => {
    const { id } = useParams();
    const [showVideo, setShowVideo] = useState(false); // State to manage video visibility
    const [feedback, setFeedback] = useState({ comment: '', rating: 5 });
    const [submittedFeedback, setSubmittedFeedback] = useState([]);

    // Simulating fetching session details from a static data source
    const sessionDetails = {
        1: { 
            title: 'Engagement Strategies 101', 
            date: '2024-09-28', 
            details: 'This session will provide you with insights on the best community engagement strategies that work in today’s virtual world. You will learn how to create meaningful interactions with your audience and retain their attention.',
            extraDetails: 'Key takeaways include creating an inclusive environment, fostering collaboration, and building trust within your community. The session will cover case studies of successful community-driven events.',
            videoLink: 'https://www.youtube.com/watch?v=example1' // Example video link
        },
        2: { 
            title: 'Live Event Management', 
            date: '2024-10-02', 
            details: 'In this session, we will dive into advanced live event management techniques on ConnectSphere. From managing attendee engagement to handling technical difficulties, this session will equip you with all you need to run smooth and successful live events.',
            extraDetails: 'You’ll also learn about contingency planning, optimizing your event for different audience sizes, and how to use ConnectSphere’s advanced tools for tracking engagement in real-time.',
            videoLink: 'https://www.youtube.com/watch?v=example2' // Example video link
        },
        // More sessions here...
    };

    const session = sessionDetails[id];

    // Toggle video visibility
    const handleLearnMoreClick = () => {
        setShowVideo(!showVideo);
    };

    // Handle form input change
    const handleFeedbackChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [name]: value
        }));
    };

    // Handle feedback form submission
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        setSubmittedFeedback([...submittedFeedback, feedback]);
        setFeedback({ comment: '', rating: 5 });
    };

    return (
        <div className="session-detail">
            <h2>{session.title}</h2>
            <p><strong>Date:</strong> {session.date}</p>
            <p>{session.details}</p>
            <p>{session.extraDetails}</p>
            <button onClick={handleLearnMoreClick} className="learn-more-btn">
                {showVideo ? 'Hide Video' : 'Learn More'}
            </button>
            {showVideo && (
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src={session.videoLink.replace('watch?v=', 'embed/')}
                        title="Video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Feedback Section */}
            <div className="feedback-section">
                <h3>Leave Your Feedback</h3>
                <form onSubmit={handleFeedbackSubmit}>
                    <div className="feedback-form">
                        <label>
                            Comment:
                            <input
                                type="text"
                                name="comment"
                                value={feedback.comment}
                                onChange={handleFeedbackChange}
                                required
                            />
                        </label>
                        <label>
                            Rating:
                            <select
                                name="rating"
                                value={feedback.rating}
                                onChange={handleFeedbackChange}
                                required
                            >
                                <option value={5}>5</option>
                                <option value={4}>4</option>
                                <option value={3}>3</option>
                                <option value={2}>2</option>
                                <option value={1}>1</option>
                            </select>
                        </label>
                        <button type="submit" className="submit-btn">Submit Feedback</button>
                    </div>
                </form>
            </div>

            {/* Display Submitted Feedback */}
            <div className="submitted-feedback">
                <h3>Feedback from Attendees:</h3>
                {submittedFeedback.length === 0 ? (
                    <p>No feedback yet. Be the first to leave a comment!</p>
                ) : (
                    submittedFeedback.map((fb, index) => (
                        <div key={index} className="feedback-item">
                            <p><strong>Comment:</strong> {fb.comment}</p>
                            <p><strong>Rating:</strong> {fb.rating}/5</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SessionDetail;
