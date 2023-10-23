import React, { useState } from 'react';

function Robot({ showSearch }) {
    const [term, setTerm] = useState('');   
    const [location, setLocation] = useState('');  
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);  // Define this state

    const handleSearch = async () => {
        try {
            const response = await fetch('/search_yelp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ term, location }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setResults(data);
            setShowResults(true);  // Set this to true once data is received
        } catch (error) {
            console.error("There was an error fetching data:", error);
        }
    };

    return (
        <div>
            {showSearch && (
                <>
                    <input value={term} onChange={e => setTerm(e.target.value)} placeholder="Food:" />
                    <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Location:" />
                    <button onClick={handleSearch}>Search</button>
                </>
            )}

            {showResults && results.length > 0 && (
                <div>
                    <h3>Results:</h3>
                    <ul>
                        {results.map((result, idx) => (
                            <li key={idx}>
                                <h2>{result.name}</h2>
                                <p>Rating: {result.rating}</p>
                                <p>Address: {result.address}</p>
                                <p>Phone: {result.phone}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Robot;
