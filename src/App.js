import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home.js';
import Family from './Family.js';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/family">
            <Family />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
