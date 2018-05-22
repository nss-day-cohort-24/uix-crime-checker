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
        componentWillUpdate(){

            console.log("Rendered", this.props.objResult);
        }
        renderPoints(){
            //let parseable = this.props.arr;
            // this.props.arr.forEach((element) => {
                
            // });((element)=>{
            //     parseable += `${element.longitude}`;

            // }); 

            return (
                <div>
                    
                </div>
            );
        }
        render(){
            return(
            this.renderPoints()
            );
        
            // return(
            //     <div>
            //     <Marker onClick={this.onMarkerClick} name={'Me and dan'}/>

            //     <Marker title={'The marker`s title will appear as a tooltip.'} onClick={this.onMarkerClick} name={'Dan in nashville'} position={{ lat: 37.778519, lng: -89.405640 }} />
            //     <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
            //         <div>
            //             <h1>{this.state.selectedPlace.name}</h1>
            //         </div>
            //     </InfoWindow>
            //     </div>
            // );
        }
}

 export default MarkerContainer;