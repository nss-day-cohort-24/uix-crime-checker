import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
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
             complain:null,
            zoom:14,
            imagePreviewUrl:''
        };

    }
    componentWillUpdate(){

        console.log("Rendered", this.props.objResult);
    }
    render() {
        if (!this.props.google) {
            return <div>Loading...</div>
        }
        const style = {
          width: '100%',
          height: '100%',
        //   border:'2px solid green',
          color:'black'
        }
        
        return (
            <div>
                <Map style={{minWidth: "100px",minHeight: "100px"}} google={this.props.google}zoom={5} className={"map"}>
                 {
                   this.props.data.map((item, index) => (
                       
                        <Marker title={'This is a point'} onClick={this.onMarkerClick} name={item.description} position={{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }} 
                        />
                     ))

                 }
                    <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
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
