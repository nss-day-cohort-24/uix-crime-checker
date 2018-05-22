import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import MarkerContainer from './MarkerContainer';

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
        if (!this.props.google) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Map style={{minWidth: "100px",minHeight: "100px"}} google={this.props.google}zoom={14} className={"map"}>
                 <MarkerContainer arr={this.props.arr}/>
                </Map>
            </div>
        );
    }
} export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
    v: "3"
})(MapContainer);
