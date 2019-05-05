import React from 'react'
import DisplayTime from './components/DisplayTime'
import DisplayQuote from './components/DisplayQuote'

import './App.css';
// There should not be any external Source.
function App() {
  
  const currentTime = new Date('Jan 1, 2019 '+ new Date().toLocaleTimeString())
  const endTime = new Date('Jan 1, 2019 23:59:59')
  const timeDiff = Math.abs(endTime - currentTime) / 1000

  return (
    <React.Fragment>
      <h1 className="time-text-label">
        TIME LEFT IN DAY:
      </h1>
      <DisplayTime
        timeDiff = {timeDiff}
      />
      <hr/>
      <DisplayQuote/>
    </React.Fragment>
  );
}

export default App;
