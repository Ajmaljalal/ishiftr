import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <p className="App-intro">
          <Landing />
        </p>
      </div>
    );
  }
}

export default App;
