import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import MarkerContainer from './MarkerContainer';

import '../App.css';

export class MapContainer extends Component {
    constructor(props) {

        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            center: [36.1627, 86.7816],

            zoom:10,

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
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            pos => {
                this.setState({
                    center: {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    }
                });
            }
        )}
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
        const style = {
          width: '100%',
          height: '100%',
          border:'2px solid green',
          color:'black'
        }

        return (
            <div>

                <Map style={{ minWidth: "100px", minHeight: "100px" }} google={this.props.google} zoom={5} className={"map"} onChange={this._onChange} center={this.state.center} zoom={this.state.zoom}>
                 {
                   this.props.data.map((item, index) => (

                        <Marker title={'This is a point'} onClick={this.onMarkerClick} name={(item.description)} position={{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }}
                        />
                     ))
                 }

                     <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
    <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                    {/* <Map onChange={this._onChange} center={this.state.center} zoom={this.state.zoom}> */}
                        {/* <div className="place" lat={this.state.center.lat} lng={this.state.center.lng}></div> */}
                    {/* </Map> */}

                </Map>
            </div>
        );
    }
} export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
    v: "3"
})(MapContainer);
