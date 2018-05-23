import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";



export class MarkerContainer extends Component {

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
            console.log("MarkerContainer is a go...");
            this.setState({
                selectedPlace: props,
                activeMarker: marker,
                showingInfoWindow: true
            });
        }
        
        
        render(){
            return(
                <div>
                {

                    this.props.data.map((item, index) => {
                       <Marker title={'This is a point'} onClick={this.onMarkerClick} name={'Police Call!'} position={{ lat: parseInt(item.latitude), lng: parseInt(item.longitude) }} 
                       />

                    })

                }
                </div>


            );
        

        }
}

 export default MarkerContainer;