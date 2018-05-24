import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import MarkerContainer from './MarkerContainer';

import '../App.css';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            call:null,
<<<<<<< HEAD
             complain:null,
            zoom:14,
=======
            // lat:null,
            // lng:null,
            complain:null,
            zoom:25,
>>>>>>> 02aaeec3036f03c41320c80dbd0a53571a2bde34
            imagePreviewUrl:''
        };
        /* binding event to state */
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    componentWillUpdate(){
        console.log("Rendered", this.props.data);
    }

    /* marker event handler */
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true 
        });
    }



    render() {
        if (!this.props.google) {
            return <div>Loading...</div>
        }
        // const style = {
        //   width: '100%',
        //   height: '100%',
        // //   border:'2px solid green',
        //   color:'black'
        // }
        
        return (
            <div>
                <Map style={{minWidth: "100px",minHeight: "100px"}} google={this.props.google} zoom={13} className={"map"} initialCenter={{lat: 36.149937, lng: -86.812866}} >
                 {
                   this.props.data.map((item, index) => (
                   
                        <Marker key={index} title={'This is a point'} onClick={this.onMarkerClick} position={{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }} 
                        name={item.description}
                        complaint={item.complaint}
                        street_name={item.street_name}
                        call_received={item.call_received}
                        />
                    
                     ))
                 }

                 <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                    <div className="MapMarkerInfo">
                   <h6>{this.state.selectedPlace.name}</h6>
                        <p><strong>Street:</strong> {this.state.selectedPlace.street_name} <br/>
                        <strong>Date of Crime:</strong> {this.state.selectedPlace.call_received}<br/>
                        <strong>Complaint Number:</strong> {this.state.selectedPlace.complaint} </p>
                    </div> 
               </InfoWindow>
                </Map>
            </div>
        );
    }
} export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
    v: "3"
})(MapContainer);
