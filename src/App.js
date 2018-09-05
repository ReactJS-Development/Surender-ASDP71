import React, { Component } from 'react';
import './App.css';
import Employee from './Employee';
import ReactLifeCycle from './ReactLifeCycle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactLifeCycle />
      </div>
    );
  }
}

export default App;
