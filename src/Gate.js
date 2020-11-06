import React from 'react';
import './App.css';

function Gate(props){
    return(
        <div>
            <h4>The Gate is  : {props.gate} </h4>
        </div>
    );
}

export default Gate;