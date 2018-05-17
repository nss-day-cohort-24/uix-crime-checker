import React, {Component} from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';

class PrimaryContainer extends Component {

    render(){
        console.log('Primary Container has arrived');
        return(
            <div className="primary">
                <p>This is the main container. Where the map, list, and chart components will render.</p>
                <div className = "map">
                    <MapContainer />
                </div>
            </div>
        );
    }

}

export default PrimaryContainer;
