import React, {Component} from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';
import Filter from './Filter';

class PrimaryContainer extends Component {

    render(){
        console.log('Primary Container has arrived');
        return(
            <div>
                <div className="primary">
                    <p>This is the main container. Where the map, list, and chart components will render.</p>
                    <Filter />
                    <div className = "map">
                        <MapContainer />
                    </div>
                </div>
                <div className="footerNav">
                    <p>This is the container that will have the router for the main footer nav. </p>
                </div>
            </div>
        );
    }

}

export default PrimaryContainer;
