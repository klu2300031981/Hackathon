import React, { useState } from 'react';
import './EventSchedule.css'; // Add styles for EventSchedule component

const EventSchedule = ({ event, onSave, onCancel }) => {
    // State variables to manage event details
    const [title, setTitle] = useState(event?.title || ''); // Event title
    const [date, setDate] = useState(event?.date || ''); // Event date
    const [description, setDescription] = useState(event?.description || ''); // Event description

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        const eventData = { title, date, description }; // Collect event data
        onSave(eventData); // Pass the data to the onSave callback
    };

    return (
        <div className="event-schedule">
            <h2>{event ? 'Edit Event' : 'Create Event'}</h2>
            <form onSubmit={handleSubmit}>
                {/* Input for Event Title */}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} // Update title state
                    placeholder="Event Title"
                    required
                />

                {/* Input for Event Date */}
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} // Update date state
                    required
                />

                {/* Textarea for Event Description */}
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} // Update description state
                    placeholder="Event Description"
                    required
                />

                {/* Submit button */}
                <button type="submit">{event ? 'Save Changes' : 'Create Event'}</button>
                
                {/* Cancel button */}
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default EventSchedule;
