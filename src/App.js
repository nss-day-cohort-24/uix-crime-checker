import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import { Marker } from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
<MapContainer/>
      </div>
    );
  }
}

export default App;
