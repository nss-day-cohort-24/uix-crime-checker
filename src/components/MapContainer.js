import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import '../App.css';
// import icon  from '../img/del.png';
export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.onMarkerChange = this.onMarkerChange.bind(this);
         this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            call:null,
            lat:null,
            lng:null,
            complain:null,
            zoom:14,
            imagePreviewUrl:''
        };

    }
    onMarkerChange(props,marker){
      this.setState({
         lat:78.99525,
         lng:45.689
      });
    }
    onMarkerClick(props, marker, e) {
        this.setState({
          lat:89.99525,
          lng:36.689,
            selectedPlace: props,
            activeMarker: marker,
            complain:"Robb",
            showingInfoWindow: true
            // imagePreviewUrl:
        });
    }
    render() {
        if (!this.props.google) {
            return <div>Loading...</div>
        }
        const style = {
          width: '100%',
          height: '100%',
          border:'2px solid green'
        }
        return (
            <div>

                <Map style={style} google={this.props.google}zoom={5} className={"map"}>



<Marker  onClick={this.onMarkerClick} name={'I think Dan is in nashville'} position={this.onMarkerChange}/>
                    <Marker  onClick={this.onMarkerClick} name={'I think Dan is in nashville'} />
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
