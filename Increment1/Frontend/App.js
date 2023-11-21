import React, { useState } from 'react';
import './App.css';
import Robot from './Robot';
import Character from './Character'; 

function App() {
  const [showSearch, setShowSearch] = useState(false);

  const handleYesClick = () => {
    console.log("Yes Button Clicked");
    setShowSearch(true); 
    window.scrollTo({
      top: window.scrollY + 1000, // Scroll down by 1000 pixels
      behavior: 'smooth'
    });
  };

  const handleNoClick = () => {
    console.log("No Button Clicked");
    window.scrollTo({
      top: window.scrollY + 2000, // Scroll down by 2000 pixels
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <h1 className="cursive-text">LEFT NO CRUMBS</h1>
      <Character />

      <p className="plate-text">ARE YOU READY TO CLEAN YOUR PLATE</p>
      <div className="button-group">
        <button className="circle-button" onClick={handleYesClick}>Yes</button>
        <button className="circle-button" onClick={handleNoClick}>No</button>
      </div>
      <div style={{ height: '1000px' }}>
        <Robot showSearch={showSearch} />
      </div>
    </div>
  );
}

export default App;
