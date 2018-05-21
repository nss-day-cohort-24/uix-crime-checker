import React, { Component } from 'react';
import './Filter.css';

class LocationInput extends Component {

    render() {
        return (
            <div>
                <label>
                    Address
                    <input type="text" name="Address" />
                </label>
                <label>
                    Zip Code
                    <input type="text" name="Address" />
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