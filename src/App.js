import React, { Component } from 'react';
import './App.css';
import PrimaryContainer from './components/PrimaryContainer';
import Header from './components/Header';

class App extends Component {

    
  render() {
    return (
      <div className="App">
        <Header />
        <PrimaryContainer />
      </div>
    );
  }
}

export default App;
