// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hello! How can I assist you with the events today?' },
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            setMessages([...messages, { from: 'user', text: inputMessage }]);
            // Simulating bot response
            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, { from: 'bot', text: 'Thank you for your message. We are here to help!' }]);
            }, 1000);
            setInputMessage('');
        }
    };

    return (
        <div className="chatbot-container">
            <h2>Event Chatbot</h2>
            <div className="chatbot-window">
                <ul className="chat-messages">
                    {messages.map((message, index) => (
                        <li key={index} className={message.from === 'user' ? 'message user' : 'message bot'}>
                            {message.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
