import React, { Component } from 'react';
import './App.css';
import PrimaryContainer from './components/PrimaryContainer';
import Header from './components/Header';

// import FooterNav from './components/FooterNav';
import Filter from './components/Filter';
import ListData from './components/ListData';



class App extends Component {
  render() {

      return(
        <div>
        {/* <h1> from  app.js</h1> */}
          {/* <Filter/> */}
          <Header/>
          <PrimaryContainer/>
      </div>
      );
    }

  }


export default App;
