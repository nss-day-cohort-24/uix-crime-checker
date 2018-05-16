import React, { Component } from 'react';

// import './App.css';
import MapContainer from './components/MapContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <MapContainer/>
        </header>

      </div>
    );
  }
}

export default App;
