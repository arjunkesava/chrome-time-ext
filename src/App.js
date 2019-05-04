import React from 'react'
import DisplayTime from './components/DisplayTime'
import DisplayQuote from './components/DisplayQuote'

import './App.css';
// There should not be any external Source.
function App() {
  return (
    <React.Fragment>
      <h1 className="time-text-label">
        TIME LEFT IN DAY
      </h1>
      <DisplayTime/>
      <hr/>
      <DisplayQuote/>
    </React.Fragment>
  );
}

export default App;
