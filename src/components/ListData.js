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
                street_name={item.street_name}
                 />
        </div>
    )
    return (
        <div className="container-fluid">
            <h1 className="h_text-center">Metro Nashville Davidson County Calls For Police Service</h1>
            <div class="ListDiv">{allCrimes}</div>
            {/* <table class="table table-striped"> */}
                {/* <thead>
                    <tr>
                        <th scope="col">Event Number</th>
                        <th scope="col">Call Recieved</th>
                        <th scope="col">TenCode Description</th>
                        <th scope="col">Disposition Description</th>
                        <th scope="col">Block</th>
                        <th scope="col">Street Name</th>
                     </tr>
                </thead>
               </table> */}
                      
        </div>
    );
}


export default ListData;
