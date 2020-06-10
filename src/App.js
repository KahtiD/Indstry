import React from 'react'
import { Home } from './containers'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home}  />
      </Switch>
    </main>
  );
}

export default App;
