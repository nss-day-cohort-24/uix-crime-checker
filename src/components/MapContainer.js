import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import icon  from '../img/del.png';
export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }




    render() {
        let string;
        
        if (!this.props.google) {

            return <div>Loading...</div>
        }
        
        string +=`<div>
        <Map style={{minWidth: "100px",minHeight: "100px"}} google={${this.props.google}}zoom={14} className={"map"}>`;
        if (this.props.arr){
            this.props.arr.forEach((element, index)=>{
                //string += ` <Marker title={"${element.tencode_suffixf_description}"} onClick={this.onMarkerClick} name={'${element.street_name}'} position={lat: ${element.latitude}, lng: ${element.longitude}} />`;
 
            });
        }
        string += `<Marker  onClick={this.onMarkerClick} name={'where is calieb'} position={{lat:36.7154, lng:-89.7586}}/>`;
        string+= `</Map>
        </div>`;
        console.log("Big big String:", string);
        return (
            <div>
            ${string}
            </div>
        );
    }
} export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
    v: "3"
})(MapContainer);
