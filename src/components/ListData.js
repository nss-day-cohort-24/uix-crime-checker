import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ListItem from './ListItem';


let ListData = (props) => {

    console.log("dan's data", props.data);
 
    const allCrimes = props.data.map((item) =>
        
        <div key={item.event_number} className="ListDiv">
            <ListItem
               event_number={item.event_number}
                itemCategory={item.itemCategory}
                disposition_description={item.disposition_description}
                latitudes={item.latitude}
                description={item.description}
                 />
        </div>
    )
    return (
        <div className="container-fluid">
            <h1 className="h_text-center">Metro Nashville Davidson County Calls For Police Service</h1>
            <div className="row">
            <div className="ListDiv">
                {/* <h1>{this.allCrimes.event_number}</h1> */}
            {allCrimes}
           </div>
           </div>
        </div>
    );
}


export default ListData;
