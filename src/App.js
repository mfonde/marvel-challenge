import React, {useState} from 'react';
import Spiderman from './assets/Spiderman-reading.jpg';
import './App.css';
import ComicSearch from './comics/ComicSearch';

function App() {

  return (
    <div className="App">
        <h1>Marvel Mayhem</h1>
        <img src={Spiderman} className="App-logo" alt="logo" />
        <ComicSearch />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
