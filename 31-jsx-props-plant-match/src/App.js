import React from 'react';
import './App.css';
import Wheel from './Wheel';
import GuidanceContainer from './GuidanceContainer';

// named export
// import { Wheel } from './Wheel'

function App() {
  return (
    <div className="App">
      <h1> Welcome to the Wellness Center</h1>
      <Wheel />
      <hr />
      <GuidanceContainer />
    </div>
  );
}

export default App;
