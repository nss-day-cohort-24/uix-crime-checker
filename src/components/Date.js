import React, { Component } from 'react';
import './Filter.css';

import { DateRange } from 'react-date-range';
 
class DateInput extends Component {
    handleSelect(range){
        console.log(range);
        // An object with two keys,
        // 'startDate' and 'endDate' which are Momentjs objects.
    }
 
    render(){
        return (
            <div>
                <DateRange
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                />
            </div>
        )
    }
}
 

export default DateInput;