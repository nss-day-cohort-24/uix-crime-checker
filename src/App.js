import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getByGeocoords(){

  }
  

  getByCrime(){


  }


  getByTime(){
    let stringtoModify;
    
    return stringtoModify; 


  }


  runApi(){
    //Series of methods for string builders activated here.
    let string;

    
    if(true === ()){
       string = this.getByTime();
    }



    fetch('https://data.nashville.gov/resource/28i3-48zr.json?block=0',{
      method: "GET",
      data: {
        "$limit" : 5000,
        "$$app_token" : "r1zPUd6qffmC6asW1Y8pPPhuj"
      }
    }).then((data)=>{
      data.json().then((resolved)=>{
        console.log("Test returned ", resolved);
      });
    
    });

  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" testAPI={this.runApi()}>
          To get started, edit <code>src/App.js</code> and save to reload. 
        </p>
      </div>
    );
  }
}

export default App;
