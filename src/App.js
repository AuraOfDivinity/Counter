import React from 'react';
import IncrementByButton from './components/IncrementByButton.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image } from 'semantic-ui-react'

function App() {
  let count = 0

  const incrementCount = incrementAmount =>{
    console.log(count += incrementAmount)
  }
  return (
    <div className="App">
      <div>

      </div>
      <div id ="ButtonDiv">
        <IncrementByButton increment = {1} color='green' onClickHandler={incrementCount} ></IncrementByButton>
        <IncrementByButton increment = {10} color='olive' onClickHandler={incrementCount}></IncrementByButton>
        <IncrementByButton increment = {100} color='yellow' onClickHandler={incrementCount}></IncrementByButton>
        <IncrementByButton increment = {1000} color='orange' onClickHandler={incrementCount}></IncrementByButton>
      </div>
    </div>
  );
}

export default App;
