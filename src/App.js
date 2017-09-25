import React, { Component } from 'react';
import MapContainer from './map-container/map-container'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
