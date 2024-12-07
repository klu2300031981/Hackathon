import React from 'react';
import './EventCard.css'; // Importing CSS for EventCard

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
            <button>Register</button>
        </div>
    );
};

export default EventCard;
