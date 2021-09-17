
// Imports
import React from 'react';
import Home from './Home.js';
import Form from './Form.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

// App
const App = () => {

  // Returns
  return (
    <div>
      <Router>
        <a><Link to = '/'>Home</Link></a>
        <a><Link to = '/pizza'>Pizza</Link></a>
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route exact path = '/pizza'>
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

// Exports
export default App;
