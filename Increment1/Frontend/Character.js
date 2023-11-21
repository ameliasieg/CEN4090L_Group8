import React from 'react';
import './Character.css'; 

function Character() {
    return (
        <div className="character-container">
            <div className="hatBase"></div>
            <div className="hatTop"></div> 
            <div className="head"></div>
            <div className="body"></div>
            <div className="leftHand"></div>
            <div className="rightHand"></div>
            <div className="eye1"></div>
            <div className="eye2"></div>
        </div>
    );
}

export default Character;
