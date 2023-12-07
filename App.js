import React, { useState } from 'react';
import SearchForm from './Search';
import Results from './Results';
import Robot from './Robot'; 
import confetti from 'canvas-confetti';
import './App.css';


function App() {
  const [results, setResults] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [spin, setSpin] = useState(false);

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
      setCurrentIndex(0); // Start with the first result
    } else {
      console.error('Failed to fetch from Flask API');
    }
  };

  const handleRestaurantResponse = (like) => {
    if (like) {
      triggerConfetti();
      // Additional logic when user clicks 'Yes'
    } else {
      setCurrentIndex(prev => (prev + 1) % results.length);
    }
  };

  const triggerConfetti = () => {
    confetti({
      angle: 90,
      spread: 180,
      particleCount: 100,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Left No Crumbs</h1>
      </header>

      <div className="main-content">
        <div className={`left-panel ${spin ? 'spin' : ''}`}>
          <Robot />
        </div>

        <div className="right-panel">
          {!isSearching && (
            <div>
              <p>Ready To Clean Your Plate?</p>
              <button onClick={() => setIsSearching(true)} className="circle-button">Yes</button>
              <button onClick={() => {/* handle 'No' logic */}} className="circle-button">No</button>
            </div>
          )}

          {isSearching && (
            <>
              <SearchForm onSearch={searchYelp} />
              {results.length > 0 && <Results data={[results[currentIndex]]} />}
              <button onClick={() => handleRestaurantResponse(true)} className="circle-button">Yes</button>
              <button onClick={() => handleRestaurantResponse(false)} className="circle-button">No</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
