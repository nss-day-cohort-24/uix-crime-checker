import React, {Component} from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';
import Filter from './Filter';
import ListData from './ListData';

class PrimaryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    

        render(){
      
        //map over arr here
        const mappedData = this.props.arr.map((item)  =>
            <div key={item.complaint}>
                <ListData
                    block={item.block}
                    call_received={item.call_received}
                    complaint={item.complaint}
                    description={item.description}
                    disposition_code={item.disposition_code}
                    disposition_description={item.disposition_description}
                    event_number={item.event_number}
                    latitude={item.latitude}
                    longitude={item.longitude}
                    mapped_location={item.mapped_location}
                    rpa={item.rpa}
                    sector={item.sector}
                    shift={item.shift}
                    street_name={item.street_name}
                    tencode={item.tencode}
                    tencode_suffix={item.tencode_suffix}
                    tencode_suffix_description={item.tencode_suffix_description}
                    unit_dispatched={item.unit_dispatched}
                    zone={item.zone}
                />
            </div>
            )

        

        return(
            <div className="primary">
                <p>This is the main container. Where the map, list, and chart components will render.</p>
                <Filter submit={this.handleSubmit} value={this.props.value1} onChange={this.handleChange}/>
                
                <div className = "map">
                    
                    <MapContainer />
                </div>
                <div className="listDiv">
                    {mappedData}
                </div>
            </div>
        );
    }

}

export default PrimaryContainer;
