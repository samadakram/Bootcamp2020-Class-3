import React from 'react';
import './App.css';

function MediaCard({title, body, imageUrl}){
    return(
        <div>
            <h2>Media Card Exercises</h2>
            <h2>{title}</h2>
        </div>
    );
}

export default MediaCard;