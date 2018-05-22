import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import MarkerContainer from './MarkerContainer';

import '../App.css';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            call:null,
            // lat:null,
            // lng:null,
            complain:null,
            zoom:14,
            imagePreviewUrl:''
        };

    }
    
    render() {
        if (!this.props.google) {
            return <div>Loading...</div>
        }
        const style = {
          width: '100%',
          height: '100%',
          border:'2px solid green',
          color:'black'
        }
        
        return (
            <div>
                <Map style={{minWidth: "100px",minHeight: "100px"}} google={this.props.google}zoom={5} className={"map"}>
                 <MarkerContainer objResult={this.props.objResult}/>
                </Map>
            </div>
        );
    }
} export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
    v: "3"
})(MapContainer);
