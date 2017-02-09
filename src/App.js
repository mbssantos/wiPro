import React, { Component } from 'react';
import WeatherBlock from './components/weather';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weather Guardian</h2>
        </div>
        <WeatherBlock />
      </div>
    );
  }
}

export default App;
