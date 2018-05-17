import React, {Component} from 'react';
import './PrimaryContainer.css';

class PrimaryContainer extends Component {

    render(){
        console.log('Primary Container has arrived');
        return(
            <div className="primary">
                <p>This is the main container. Where the map, list, and chart components will render.</p>
            </div>
        );
    }

}

export default PrimaryContainer;
