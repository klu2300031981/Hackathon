import React, { useState } from 'react';
import './EventSearch.css'; // Importing CSS for EventSearch

const EventSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="event-search">
            <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default EventSearch;
