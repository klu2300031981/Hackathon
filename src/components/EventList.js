// src/components/EventList.js
import React, { useState } from 'react';
import EventSchedule from './EventSchedule';
import SessionManagement from './SessionManagement';
import LiveInteraction from './LiveInteraction';
import './EventList.css';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [isManagingSessions, setIsManagingSessions] = useState(false);
    const [isLiveInteraction, setIsLiveInteraction] = useState(false);

    // Function to save or update event
    const handleSave = (eventData) => {
        if (currentEvent) {
            setEvents(events.map(event => (event.id === currentEvent.id ? eventData : event)));
        } else {
            setEvents([...events, { ...eventData, id: events.length + 1 }]);
        }
        resetForm();
    };

    // Function to edit an event
    const handleEdit = (event) => {
        setCurrentEvent(event);
        setIsEditing(true);
    };

    // Function to manage sessions for an event
    const handleManageSessions = (event) => {
        setCurrentEvent(event);
        setIsManagingSessions(true);
    };

    // Function to start live interaction for an event
    const handleLiveInteraction = (event) => {
        setCurrentEvent(event);
        setIsLiveInteraction(true);
    };

    // Function to delete a session for an event
    const handleDeleteSession = (eventId) => {
        const updatedEvents = events.filter(event => event.id !== eventId);
        setEvents(updatedEvents); // Update the state by removing the selected event
    };

    // Reset the form and close the editor
    const resetForm = () => {
        setCurrentEvent(null);
        setIsEditing(false);
        setIsManagingSessions(false);
        setIsLiveInteraction(false);
    };

    return (
        <div className="event-list">
            <h2>Event Management</h2>
            <button onClick={() => setIsEditing(true)}>Create Event</button>
            {isEditing && (
                <EventSchedule
                    event={currentEvent}
                    onSave={handleSave}
                    onCancel={resetForm}
                />
            )}
            {isManagingSessions && (
                <SessionManagement
                    eventTitle={currentEvent.title}
                    eventId={currentEvent.id}
                    onCancel={resetForm}
                />
            )}
            {isLiveInteraction && (
                <LiveInteraction
                    eventTitle={currentEvent.title}
                    onCancel={resetForm}
                />
            )}
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        <h3>{event.title}</h3>
                        <p>Date: {event.date}</p>
                        <p>{event.description}</p>
                        <button onClick={() => handleEdit(event)}>Edit</button>
                        <button onClick={() => handleManageSessions(event)}>Manage Sessions</button>
                        <button onClick={() => handleLiveInteraction(event)}>Live Interaction</button>
                        <button className="delete-button" onClick={() => handleDeleteSession(event.id)}>Delete Session</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
