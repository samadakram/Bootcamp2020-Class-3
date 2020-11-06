import React from 'react';
import './App.css';
import MediaCard from './MediaCard';
import ReactImg from './image.png';

function App(){
  return(
    <div className="container">
      Hello <strong> Abdul Samad! </strong>
      <h1>Frontend Developer</h1>
      <p>Expert in:</p>
      <ol>
        <li>HTML5</li>
        <li>CSS3
          <ul>
            <li>Bootstrap</li>
            <li>Materialize</li>
          </ul>
        </li>
        <li>JavaScript
          <ul>
            <li>ReactJs
              <ul>
                <li>Redux</li>
                <li>React Redux</li>
              </ul>
            </li>
            <li>Angular</li>
          </ul>
        </li>
      </ol>
      <h2>addition of numbers</h2>
      <p>If we add 5 into 10, what will be the sum?</p>
      <p className="solution-para">
        <b>SOLUTION:</b>
        {5 + 10}
      </p>
      <MediaCard title="Basic React Logo" imageUrl={ReactImg}/>
    </div>
  );
}

export default App;
