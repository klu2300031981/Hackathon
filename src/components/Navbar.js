import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Virtual Event Management Platform</Link> {/* Adjusted the platform name */}
            </div>
            <ul className="navbar-links">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/live-interaction">Live Interaction</Link></li>
                <li><Link to="/chatbot">Chatbot</Link></li> {/* Chatbot link */}

                <li>
                    <Link to="/video-call" className="video-call">
                        <i className="fas fa-video"></i> {/* Video call icon only */}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
