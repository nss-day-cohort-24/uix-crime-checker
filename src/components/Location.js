import React, { Component } from 'react';
import './Filter.css';

class LocationInput extends Component {

    constructor(props) {
        super(props);
        this.state = {value: null};

      }

    render() {
        return (
            <div>
                <label>
                    Address
                    <input type="text" name="Address" value={this.state.value} onChange={this.props.Change}/>
                </label>
                <label>
                    Zip Code
                    <input id="zip" type="text" name="Address" />
                </label>
                <label>
                    Search Radius
                    <input type="text" name="Address" />
                </label>
                
            </div>
        );
    }
}

export default LocationInput;