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
        const key = event.target.id;
        this.setState({
            key: userInput
        });
        console.log('value', userInput);
        this.props.handleChange(key, userInput);
    }

    render() {
        return (
            <div>
                <label>
                    Address <br/>
                    <input type="text" id="address" name="Address" value={this.state.value} onChange={this.onChange} />
                </label>
                <label>
                    Zip Code <br/>
                    <input id="zip" type="text" name="Zip" value={this.state.value} onChange={this.onChange} />
                </label>
                
            </div>
        );
    }
}

export default LocationInput;