import React, {Component} from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';
import Filter from './Filter';
import ListData from './ListData';

class PrimaryContainer extends Component {

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
            <div>
                <div className="filter">
                    <Filter />
                </div>
                <div className = "map"> 
                {/* if list state = false, display MapContainer */}
                    <MapContainer />
                </div>
                <div className="listDiv">
                    {mappedData}
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
