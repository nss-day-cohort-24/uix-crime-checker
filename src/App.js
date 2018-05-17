import React, { Component } from 'react';
// import './App.css';
import MapContainer from './components/MapContainer';
import { Marker } from 'google-maps-react';
// import Marker from './components/Marker';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Marker/>

        </header>
<MapContainer/>
      </div>
    );
  }
}

export default App;
