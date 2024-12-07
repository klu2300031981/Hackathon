import React, { useState } from 'react';
import './SessionManagement.css'; // Ensure this path is correct

const SessionManagement = ({ eventTitle, onCancel }) => {
    const [sessions, setSessions] = useState([]);
    const [sessionTitle, setSessionTitle] = useState('');
    const [participants, setParticipants] = useState([]);

    const handleAddSession = () => {
        if (sessionTitle.trim()) {
            const newSession = {
                title: sessionTitle,
                participants: []
            };
            setSessions([...sessions, newSession]);
            setSessionTitle(''); // Reset input field after adding
        }
    };

    const handleAddParticipant = (sessionIndex, participant) => {
        if (participant.trim()) {
            const newSessions = [...sessions];
            newSessions[sessionIndex].participants.push(participant);
            setSessions(newSessions);
        }
    };

    return (
        <div className="session-management">
            <h2>Manage Sessions for: {eventTitle}</h2>
            <div>
                <input
                    type="text"
                    value={sessionTitle}
                    onChange={(e) => setSessionTitle(e.target.value)}
                    placeholder="Session Title"
                    required
                />
                <button onClick={handleAddSession}>Add Session</button>
            </div>
            <ul>
                {sessions.map((session, index) => (
                    <li key={index}>
                        <h3>{session.title}</h3>
                        <ParticipantInput onAdd={(participant) => handleAddParticipant(index, participant)} />
                        <ul>
                            {session.participants.map((participant, i) => (
                                <li key={i}>{participant}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <button onClick={onCancel}>Back to Events</button>
        </div>
    );
};

const ParticipantInput = ({ onAdd }) => {
    const [participantName, setParticipantName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(participantName);
        setParticipantName(''); // Reset input field after adding
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={participantName}
                onChange={(e) => setParticipantName(e.target.value)}
                placeholder="Participant Name"
                required
            />
            <button type="submit">Add Participant</button>
        </form>
    );
};

export default SessionManagement;
