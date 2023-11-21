import React from 'react';
import './Robot.css'; // Make sure to import the CSS file

function Robot() {
  return (
    <div className="character-container">
      <div className="head"></div>
      <div className="body"></div>
      <div className="leftHand"></div>
      <div className="rightHand"></div>
      <div className="eye1"></div>
      <div className="eye2"></div>
    </div>
  );
}

export default Robot;
