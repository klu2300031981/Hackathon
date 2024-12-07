// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure you have your CSS styles
import Navbar from './components/Navbar'; // If you have a Navbar component
import Login from './components/Login';
import Home from './components/Home';
import EventList from './components/EventList';
import RegistrationForm from './components/RegistrationForm';
import LiveInteraction from './components/LiveInteraction';
import Chatbot from './components/Chatbot';
import SessionDetail from './components/SessionDetails'; // Ensure correct file name
import JoinSession from './components/JoinSession'; // Importing JoinSession component
import RegisterSession from './components/RegisterSession'; // Importing RegisterSession component

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Navbar for all pages */}
                <main>
                    <Routes>
                        {/* Home route */}
                        <Route path="/" element={<Home />} />

                        {/* Authentication */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<RegistrationForm />} />
                        
                        {/* Events and features */}
                        <Route path="/events" element={<EventList />} />
                        <Route path="/live-interaction" element={<LiveInteraction />} />
                        
                        {/* Chatbot route */}
                        <Route path="/chatbot" element={<Chatbot />} />
                        
                        {/* Session details routes */}
                        <Route path="/session/:id" element={<SessionDetail />} />
                        <Route path="/join-session/:sessionId" element={<JoinSession />} />
                        <Route path="/register-session/:sessionId" element={<RegisterSession />} /> {/* RegisterSession Route */}
                    </Routes>
                </main>
            </div>
        </Router>
        
    );
};

export default App;