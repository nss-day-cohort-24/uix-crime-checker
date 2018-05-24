import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ListItem from './ListItem';
import './ListItem.css';

let ListData = (props) => {

    console.log("dan's data", props.data);

    const allCrimes = props.data.map((item) =>

        <div key={item.event_number} className="ListDiv">
            <ListItem
                event_number={item.event_number}
                itemCategory={item.itemCategory}
                disposition_description={item.disposition_description}
                call_received={item.call_received}
                description={item.description}
                block={item.block}
                complaint={item.complaint}
                street_name={item.street_name}
                disposition_code={item.disposition_code}
                rpa={item.rpa}
                unit_dispatched={item.unit_dispatched}
                tencode={item.tencode}
            />
        </div>
    )
    return (
        <div className="container-fluid">
            <h1 className="h_text-center">Metro Nashville Davidson County Calls For Police Service</h1>
            <div className="ListDiv">{allCrimes}</div>


        </div>
    );
}


export default ListData;