import React, { Component } from 'react';
import './App.css';

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

  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}

export default App;


