import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ListItem from './ListItem';


let ListData = (props) => {

    console.log("dan's data", props.data);

    const allCrimes = props.data.map((item) =>
        
        <div key={item.event_number} className="ListDiv" >
            <ListItem
                event_number={item.event_number}
                itemCategory={item.itemCategory}
                disposition_description={item.disposition_description}
                latitudes={item.latitude}
                description={item.description}
                 />
        </div>
    )
//      latit = () => {
//  let Dan={this.props.longitude};
//  Dan=parseInt{this.props.longitude};
// };
    // expart default latitude;


    return (
        <div className="ListDiv">
            {allCrimes}
           
        </div>
    );
}


export default ListData;
