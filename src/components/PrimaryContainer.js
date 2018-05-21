import React, {Component} from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';
import Filter from './Filter';

class PrimaryContainer extends Component {

    render(){
        console.log('Primary Container has arrived');
        return(
            <div>
                <div className="filter">
                    <Filter />
                </div>
                <div className = "map"> 
                {/* if list state = false, display MapContainer */}
                    <MapContainer />
                </div>
                {/* else, display List */}
                <div className="footerNav">
                    <p>This is the container that will set state for whether to view map or list. </p>
                </div>
            </div>
        );
    }

}

export default PrimaryContainer;
