import React, {useState} from 'react';
import Spiderman from './assets/Spiderman-reading.jpg';
import './App.css';
import ComicSearch from './comics/ComicSearch';

function App() {
  const [detailView, setDetailView] = useState(false);

  return (
    <div className="App">
      {detailView == false ?
      <div>
        <h1>Marvel Mayhem!</h1>
        <img src={Spiderman} className="App-logo" alt="logo" />
      </div>
      : <></>
      }
        <ComicSearch detailView={detailView} setDetailView={setDetailView} />
    </div>
  );
}

export default App;
