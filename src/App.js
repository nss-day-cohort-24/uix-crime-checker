import React, { Component } from 'react';
import './App.css';
import PrimaryContainer from './components/PrimaryContainer';
import Header from './components/Header';
import FooterNav from './components/FooterNav';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        arr: {},
        isLoaded: false
    };

    this.runApi.bind(this);
}

  componentDidMount(){

    this.runApi()
  }

  componentDidUpdate(){

    console.log("Bam it updated: ", this.state);
  }
  getByGeocoords(geoCoords, string){


    return string;
  }
  

  getByCrime(crime, string){

    return string;
  }


  getByTime(time, string){

    return string;
  }
 

  runApi(){
    //Series of methods for string builders activated here.
    let string, time, crime, geoCoords;


    if(true === (false)){ //conditional for switching....
       string +=` ${this.getByTime(time, string)}`;
       string +=` ${this.getByCrime(crime, string)}`;
       string +=` ${this.getByGeocoords(geoCoords, string)}`;

    }

    // Change the fetch with modified string.

    fetch('https://data.nashville.gov/resource/28i3-48zr.json?block=0',{
      method: "GET",
      data: {
        "$limit" : 5000,
        "$$app_token" : "r1zPUd6qffmC6asW1Y8pPPhuj"
        
      },
      header: {
        "Access-Control-Allow-Origin" : "*"
   }
    }).then((data)=>{
      data.json().then((resolved)=>{
        console.log("Test returned ", resolved);
        let arr = resolved;
        console.log("What's this? ", resolved);
        this.setState({
          arr: resolved,
          isLoaded: true
        });
        
      });
    
    });

  }
  
  
  render() {
    
    if(this.state.isLoaded){
      return (
        <div className="App">
          
  
          <Header />
          <PrimaryContainer arr={this.arr}/>
  
          <p className="App-intro" >
           Check console because that's the only place you'll see changes atm. 
          </p>
          
        <FooterNav />
        </div>
      );


    }
    else{

      return(
        <h1> Didn't Go. </h1>
      )
    }
  }
}

export default App;
