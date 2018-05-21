import React, { Component } from 'react';
import './App.css';
import PrimaryContainer from './components/PrimaryContainer';
import Header from './components/Header';
import FooterNav from './components/FooterNav';


class App extends Component {

    
  render() {
    return (
      <div>
      <Header />
      <PrimaryContainer />
      
      </div>
    );
  }
}

export default App;
