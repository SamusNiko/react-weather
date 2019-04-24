import React, { Component } from 'react';
import Weather from './Containers/Weather/Weather'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Weather/>
      </div>
    );
  }
}

export default App;
