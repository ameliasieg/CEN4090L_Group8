import React, { useState } from 'react';
import SearchForm from './Search';
import Results from './Results'; 
import Robot from './Robot'; 
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [yesEat, setYesEat] = useState(null);

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
    
    <div className="main-content">
    <div className="left-panel">
    <Robot />
    </div>
    
    <div className="right-panel">
    {yesEat === null && (
      <div>
      <p>Ready To Clean Your Plate?</p>
      <button onClick={() => setYesEat(true)} className="circle-button">Yes</button>
      <button onClick={() => setYesEat(false)} className="circle-button">No</button>
      </div>
    )}
    
    {yesEat === true && (
      <>
      <SearchForm onSearch={searchYelp} />
      <Results data={results} />
      </>
    )}
    
    {yesEat === false && <p>Nothing</p>}
    </div>
    </div>
    </div>
  );

}



export default App;
