import React, {Component} from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';
import Filter from './Filter';
import ListData from './ListData';
import FooterNav from './FooterNav';

class PrimaryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            isLoaded: false
        };

        this.runApi.bind(this);
    }


    createCrimeObject () {
        let MappedData = this.state.arr.map((item) => 
                block = item.block,
                call_received = item.call_received
                // complaint = { item.complaint }
                // description = { item.description }
                // disposition_code = { item.disposition_code }
                // disposition_description = { item.disposition_description }
                // event_number = { item.event_number }
                // latitude = { item.latitude }
                // longitude = { item.longitude }
                // mapped_location = { item.mapped_location }
                // rpa = { item.rpa }
                // sector = { item.sector }
                // shift = { item.shift }
                // street_name = { item.street_name }
                // tencode = { item.tencode }
                // tencode_suffix = { item.tencode_suffix }
                // tencode_suffix_description = { item.tencode_suffix_description }
                // unit_dispatched = { item.unit_dispatched }
                // zone = { item.zone }

        )
    }
    componentDidMount() {

        this.runApi()
    }

    componentDidUpdate() {

        console.log("Bam it updated: ", this.state);
    }


    // getByGeocoords(geoCoords, string) {


    //     return string;
    // }


    // getByCrime(crime, string) {

    //     return string;
    // }


    // getByTime(time, string) {

    //     return string;
    // }


    runApi() {
        //Series of methods for string builders activated here.
        // let string, time, crime, geoCoords;


        // if (true === (false)) { //conditional for switching....
        //     string += ` ${this.getByTime(time, string)}`;
        //     string += ` ${this.getByCrime(crime, string)}`;
        //     string += ` ${this.getByGeocoords(geoCoords, string)}`;

        // }

        // Change the fetch with modified string.

        fetch('https://data.nashville.gov/resource/28i3-48zr.json?block=0', {
            method: "GET",
            data: {
                "$limit": 100,
                "$$app_token": "r1zPUd6qffmC6asW1Y8pPPhuj"

            },
            header: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then((data) => {
            data.json().then((resolved) => {
                console.log("Test returned ", resolved);
                let arr = resolved;
                console.log("What's this? ", resolved);
                this.setState({
                    arr: resolved,
                    isLoaded: true
                });
                createCrimeObject

            });

        });

    }

    

        render(){
      
        if (this.state.isLoaded) {
            return (
                <div className="App">

                    <MapContainer arr={this.state.arr} />
                    <FooterNav />

                    <p className="App-intro" >
                        Check console because that's the only place you'll see changes atm.
          </p>

                    <FooterNav />
                </div>
            );


        }
        else {

            return (
                <h1> Didn't Go. </h1>
            )
        }
    }
}
        //map over arr here
        

        // return(
        //     <div className="primary">
        //         <p>This is the main container. Where the map, list, and chart components will render.</p>
        //         <Filter />
                
        //         <div className = "map">
                    
        //             <MapContainer />
        //         </div>
        //         <div className="listDiv">
        //             {mappedData}
        //         </div>
        //     </div>
        // );

export default PrimaryContainer;
