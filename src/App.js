import React, { Component } from 'react';
import './App.css';
import PrimaryContainer from './components/PrimaryContainer';
import Header from './components/Header';
import FooterNav from './components/FooterNav';
import Filter from './components/Filter';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
      
        <PrimaryContainer />
        <FooterNav />
      </div>
    );
  }
}

export default App;
