import React, { useState } from 'react';
import './LiveInteraction.css';

const LiveInteraction = () => {
    const [polls, setPolls] = useState([]); // Array of polls with responses
    const [questions, setQuestions] = useState([]); // Array of questions
    const [newPoll, setNewPoll] = useState(''); // New poll question input
    const [newOption, setNewOption] = useState(''); // New poll option input
    const [newQuestion, setNewQuestion] = useState(''); // New question input

    // State to capture responses for each poll
    const [pollResponses, setPollResponses] = useState({});

    // Handle adding a new poll with options
    const handleAddPoll = () => {
        if (newPoll) {
            const pollData = {
                question: newPoll,
                options: [],
                responses: {} // Initialize responses as an empty object
            };
            setPolls([...polls, pollData]);
            setNewPoll(''); // Reset the poll question input
        }
    };

    // Handle adding a new option to the latest poll
    const handleAddOption = (index) => {
        if (newOption && polls[index]) {
            const updatedPolls = [...polls];
            updatedPolls[index].options.push(newOption); // Add new option to the poll
            updatedPolls[index].responses[newOption] = 0; // Initialize response count for the new option
            setPolls(updatedPolls); // Update state with new options
            setNewOption(''); // Reset the option input
        }
    };

    // Handle response to a poll option
    const handlePollResponse = (pollIndex, option) => {
        const updatedResponses = { ...pollResponses }; // Copy existing responses
        if (!updatedResponses[pollIndex]) {
            updatedResponses[pollIndex] = {}; // Initialize if it doesn't exist
        }
        // Update the response count for the selected option
        updatedResponses[pollIndex][option] = (updatedResponses[pollIndex][option] || 0) + 1;
        setPollResponses(updatedResponses); // Update the state with new responses
    };

    return (
        <div className="live-interaction">
            <h2>Live Interaction</h2>

            <div className="live-stream">
                <h3>Live Streaming</h3>
                <p>Live streaming content will appear here...</p>
            </div>

            <div className="poll-section">
                <h3>Live Polls</h3>
                <input
                    type="text"
                    value={newPoll}
                    onChange={(e) => setNewPoll(e.target.value)} // Update poll question input
                    placeholder="Enter poll question"
                    className="poll-input"
                />
                <button onClick={handleAddPoll} className="add-poll-button">Add Poll</button>

                {/* Render each poll with options */}
                {polls.map((poll, index) => (
                    <div key={index} className="poll-card">
                        <h4 className="poll-question">{poll.question}</h4>

                        {/* Input for new option */}
                        <input
                            type="text"
                            value={newOption}
                            onChange={(e) => setNewOption(e.target.value)} // Update option input
                            placeholder="Enter option"
                            className="option-input"
                        />
                        <button onClick={() => handleAddOption(index)} className="add-option-button">Add Option</button>

                        {/* Display options and response buttons */}
                        {poll.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="poll-option">
                                <button 
                                    className="option-button" 
                                    onClick={() => handlePollResponse(index, option)}>
                                    {option} <span className="response-count">({pollResponses[index]?.[option] || 0})</span>
                                </button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="qa-section">
                <h3>Q&A Section</h3>
                <input
                    type="text"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)} // Update question input
                    placeholder="Enter your question"
                    className="qa-input"
                />
                <button onClick={() => {
                    if (newQuestion) {
                        setQuestions([...questions, newQuestion]);
                        setNewQuestion(''); // Reset the input field
                    }
                }} className="ask-question-button">Ask Question</button>
                <ul>
                    {questions.map((question, index) => (
                        <li key={index}>{question}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LiveInteraction;
