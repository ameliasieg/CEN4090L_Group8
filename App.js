import React, { useState } from 'react';
import SearchForm from './Search';
import Results from './Results'; 
import Robot from './Robot'; 
import './App.css';
function App() {
  const [results, setResults] = useState([]);

  const searchYelp = async (term, location) => {
    const response = await fetch('http://127.0.0.1:5000/search_yelp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ term, location }),
    });

    if (response.ok) {
      const data = await response.json();
      setResults(data);
    } else {
      // Handle errors
      console.error('Failed to fetch from Flask API');
    }
  };

  return (
    <div className="app-container">
         <header className="header">
        <h1>Left No Crumbs</h1>
        
      </header>
      <Robot />
      <SearchForm onSearch={searchYelp} />
      <Results data={results} />
    </div>
  );

}



export default App;
