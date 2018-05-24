import React, { Component } from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';
import Filter from './Filter';
import ListData from './ListData';
import MapIcon from '../img/mapIcon.png';
import ListIcon from '../img/listIcon.png';

// console.log('hi mu mu')

class PrimaryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArr: [],
            error: null,
            locationValue: '',
            mapview: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
     
    handleChange(key, userInput) {

        //key must be the id of the data, userInput is the data

      this.setState({[key]: userInput}); 
        // handleUpdate assigns whatever object to overarching state.
      this.handleUpdate({[key]: userInput});
    }
    submit = (event) => {
        // Submit fires the fetch.
        console.log("Fetch the state", this.state);

    }

    handleUpdate = (object) => {
        this.setState({
            [object.key]: [object.userInput]
        })
    }
       
    getFormData = (object) => {
        this.setState({
            locationValue: object
        })
            // console.log('getFormData object', object);
            // .then(() => {this.handleSubmit()});
        }


    componentDidMount = () => {
        fetch(`https://data.nashville.gov/resource/28i3-48zr.json`, {
            method: "GET",
            data: {
                "$limit": 100,
                "$$app_token": "r1zPUd6qffmC6asW1Y8pPPhuj"
            },
            header: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then((results) => {
            console.log("my result", results);
            return results.json();
        }).then((data) => {
            let stuff = Object.values(data);
            console.log ("dan's stuff", stuff);
            this.setState({
                dataArr: stuff
            })

        });


    }


    viewMap = () => {
        this.setState({
            mapview: true
        });
    }

    viewList = () => {
        this.setState({
            mapview: false
        });
    }

  
    render() {
        const mapview = this.state.mapview;

        let view = mapview ? 
        (<div className="map">
            <MapContainer data={this.state.dataArr} />
        </div>) 
        :
        (<div className="listDiv">
            <ListData data={this.state.dataArr}/>
        </div>);

        return (
            <div className="App">
                <div className="filter">
                    <Filter submit={this.getFormData} submit2={this.submit} value={this.locationValue} handleChange={this.handleChange}/>
                </div>
                <div mapview={mapview}>{view}</div>
                <div className="footerNav row">
                        <div className="col-auto mx-auto borderRule" onClick={this.viewMap}><img src={MapIcon} className="footer-icon" alt="Map Icon"></img><br />Map</div><div className="col-auto mr-auto" onClick={this.viewList}><img src={ListIcon} className="footer-icon" alt="List Icon"></img><br/>List</div>
                </div>
            </div>

        );
    }
}


export default PrimaryContainer;




                // resolved.map((item, index) => {
                    // objResults.push({
                    //     block: item.block,
                    //     call_received: item.call_received,
                    //     complaint: item.complaint,
                    //     description: item.description,
                    //     disposition_code: item.disposition_code,
                    //     disposition_description: item.disposition_description,
                    //     event_number: item.event_number,
                    //     latitude: item.latitude,
                    //     longitude: item.longitude,
                    //     mapped_location: item.mapped_location,
                    //     rpa: item.rpa,
                    //     sector: item.sector,
                    //     shift: item.shift,
                    //     street_name: item.street_name,
                    //     tencode: item.tencode,
                    //     tencode_suffix: item.tencode_suffix,
                    //     tencode_suffix_description: item.tencode_suffix_description,
                    //     unit_dispatched: item.unit_dispatched,
                    //     zone: item.zone,
