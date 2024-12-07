// src/components/Home.js
import React from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Sample data for sessions
    const sessions = [
        { id: 1, title: 'Yoga', date: '2024-09-28', description: 'Learn the best strategies to engage your community effectively.' },
        { id: 2, title: 'singing', date: '2024-10-02', description: 'Discover tips for managing live events on the ConnectSphere platform.' },
        { id: 3, title: 'Interactive Q&A', date: '2024-10-05', description: 'Host interactive Q&A sessions to enhance engagement with your audience.' },
    ];

    const upcomingSessions = [
        { id: 4, title: 'Virtual Networking Tips', date: '2024-10-10', description: 'Learn how to build meaningful connections in virtual spaces.' },
        { id: 5, title: 'Standup comedy', date: '2024-10-15', description: 'Dive deeper into engagement strategies with hands-on activities.' },
        { id: 6, title: 'Doctor interaction', date: '2024-10-20', description: 'Enhance the effectiveness of your webinars with practical tips.' },
    ];

    const ongoingSessions = [
        { id: 7, title: 'Building Virtual Communities', date: '2024-10-03', description: 'Learn how to foster active and engaged online communities.' },
        { id: 8, title: 'dancing', date: '2024-10-04', description: 'Ongoing strategies for marketing your virtual events effectively.' },
        { id: 9, title: 'Effective Event Planning', date: '2024-10-06', description: 'Learn the ins and outs of effective virtual event planning.' },
    ];

    // Handle navigation to the Join Session form page
    const handleJoinFast = (sessionId) => {
        navigate(`/join-session/${sessionId}`); // Navigate to the JoinSession page with the session ID
    };

    // Handle navigation to the Register Session form page
    const handleRegister = (sessionId) => {
        navigate(`/register-session/${sessionId}`); // Navigate to the RegisterSession page with the session ID
    };

    return (
        <div className="home">
            <h2>Welcome to the Virtual Event Management Platform</h2>
            <p>Your one-stop platform for organizing and managing virtual events.</p>

            {/* Section for Held Sessions */}
            <div className="held-sessions session-section">
                <h3>Sessions Held by Us</h3>
                <div className="sessions-grid">
                    {sessions.map((session) => (
                        <div className="session-box" key={session.id}>
                            <h4>{session.title}</h4>
                            <p><strong>Date:</strong> {session.date}</p>
                            <p>{session.description}</p>
                            <Link to={`/session/${session.id}`} className="learn-more-btn">
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section for Ongoing Sessions */}
            <div className="ongoing-sessions session-section">
                <h3>Ongoing Sessions</h3>
                <div className="sessions-grid">
                    {ongoingSessions.map((session) => (
                        <div className="session-box" key={session.id}>
                            <h4>{session.title}</h4>
                            <p><strong>Date:</strong> {session.date}</p>
                            <p>{session.description}</p>
                            <button 
                                className="learn-more-btn"
                                onClick={() => handleJoinFast(session.id)} // Trigger navigation to join form page
                            >
                                Join Fast
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section for Upcoming Sessions */}
            <div className="upcoming-sessions session-section">
                <h3>Upcoming Sessions</h3>
                <div className="sessions-grid">
                    {upcomingSessions.map((session) => (
                        <div className="session-box" key={session.id}>
                            <h4>{session.title}</h4>
                            <p><strong>Date:</strong> {session.date}</p>
                            <p>{session.description}</p>
                            <button
                                className="learn-more-btn"
                                onClick={() => handleRegister(session.id)} // Trigger navigation to register form page
                            >
                                Register
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
