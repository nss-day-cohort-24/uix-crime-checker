import React, { Component } from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';
import Filter from './Filter';
import ListData from './ListData';
import MapIcon from '../img/mapIcon.png';
import ListIcon from '../img/listIcon.png';
let urlString ='';

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
        urlString += `https://data.nashville.gov/resource/28i3-48zr.json?` //description=Business%20Check
        // if(this.state.address){
        //     urlString+=`street_name=` + encodeURIComponent(this.state.address.trim())
        // }
        if(this.state["Suspicious Person"] || this.state["Shots Fired"] || this.state.Fire || this.state.Theft || this.state.Prowler || this.state["Intoxicated Person"] || this.state["Business Check"] || this.state["Traffic Violation"] ){

            urlString+="description="
        }
        if(this.state["Suspicious Person"]){
            urlString+="Suspicious%20Person%20";
        }
        if(this.state["Intoxicated Person"]){
            urlString+="Intoxicated%20Person%20";
        }
        if(this.state["Business Check"]){
            urlString+="Business%20Check%20";
        }
        if(this.state["Traffic Violation"]){
            urlString+="Traffic%20Violation%20";
        }
        if(this.state["Shots Fired"]){
            urlString+="Shots%20Fired%20";
        }
        if(this.state.Fire){
            urlString+="Fire%20";
        }
        if(this.state.Prowler){
            urlString+="Prowler%20";
        }
        if(this.state.Theft){
            urlString+="Theft%20";
        }
        if (urlString)
        {
            urlString = urlString.slice(0, urlString.length-3);
            
        }
        
        fetch(`${urlString}`, {
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
    // componentWillUpdate(){
    //     console.log("Update!");
    //     let stringToSend;
    //     if (urlString.length === 0){
    //         stringToSend = "https://data.nashville.gov/resource/28i3-48zr.json";   
    //     }
    //     else if(urlString.length >= 1){
    //         stringToSend = urlString;
    //         console.log(stringToSend)
    //     }
    // }

    componentDidMount = () => {
        let stringToSend;
        if (urlString.length === 0){
            stringToSend = "https://data.nashville.gov/resource/28i3-48zr.json";   
        }
        else if(urlString.length >= 1){
            stringToSend = urlString;
        }

        fetch(`${stringToSend}`, {
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
