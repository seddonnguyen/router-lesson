import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import List from './components/List'
import AppNotFound from './components/AppNotFound'


class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["frog", "dog", "cat", "monkey"]
    }
  }

  listComponent = () => <List animals={this.state.list} />;

  render() {
    return (
      <Router>
        <div className="nav">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about/">About</Link>
          <Link className="link" to="/list/">List</Link>
        </div>
        <Switch>
          <Route
            path="/about/"
            render={(props) => <About {...props} /> }
          />
          <Route 
            path="/list/"
            render={ this.listComponent }
          />
          <Route exact path="/" component={ Home } />
          <Route component={ AppNotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;


