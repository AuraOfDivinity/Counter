import React, { useState } from 'react';
import IncrementByButton from './components/IncrementByButton.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, GridColumn, GridRow, Card } from 'semantic-ui-react'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = incrementAmount =>{
    setCount(count + incrementAmount)
  }
  return (
    <div className="App">
      <div>

      </div>
      <Grid columns={16} >
        <GridRow centered>
          <GridColumn>
            <IncrementByButton increment = {1} color='green' onClickHandler={incrementCount} ></IncrementByButton>
          </GridColumn>
          <GridColumn>
            <IncrementByButton increment = {10} color='olive' onClickHandler={incrementCount}></IncrementByButton>
          </GridColumn>
          <GridColumn>
            <IncrementByButton increment = {100} color='yellow' onClickHandler={incrementCount}></IncrementByButton>
          </GridColumn>
          <GridColumn>
            <IncrementByButton increment = {1000} color='orange' onClickHandler={incrementCount}></IncrementByButton>
          </GridColumn>
          </GridRow>
          <GridRow centered>
            <Card>
              <Card.Content header='Display' centered/>
              <Card.Content description={count} />
            </Card>
          </GridRow>
      </Grid>
    </div>
  );
}

export default App;
