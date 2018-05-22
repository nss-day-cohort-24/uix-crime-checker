import React, { Component } from 'react';
import './Filter.css';

class LocationInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
        this.onChange = this.onChange.bind(this);
    }
    

    onChange = (event) => {
        const userInput = event.target.value;
        this.setState({
            value: userInput
        });
        console.log('value', userInput);
        this.props.handleChange('locationValue', userInput);
    }

    render() {
        return (
            <div>
                <label>
                    Address
                    <input type="text" name="Address" value={this.state.value} onChange={this.onChange} />
                </label>
                <label>
                    Zip Code
                    <input id="zip" type="text" name="Zip" />
                </label>
                <label>
                    Search Radius
                    <input type="text" name="Radius" />
                </label>
                
            </div>
        );
    }
}

export default LocationInput;