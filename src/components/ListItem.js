import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="container">
                <div id="rowli" className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 check">
                        <h5 className="descrip">{this.props.description}</h5>
                        <p>{this.props.event_number}</p>
                        <ul className="listl">
                            <p><strong>Call Recieved on :</strong> {this.props.call_received}</p><p>|</p>
                            <p><strong>Block No. :</strong>{this.props.block}</p> <p>|</p>
                            <p><strong>Street Name :</strong>{this.props.street_name}</p><p>|</p>
                            <br />
                            <a href="#" className="more" onClick={this.toggle}>{this.props.buttonLabel}More...</a>
                        </ul>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.description}</ModalHeader>
                    <ModalBody>
                        <p><strong>Event No.:</strong>{this.props.event_number}</p>
                        <p><strong>Call Received on :</strong> {this.props.call_received}</p>
                        <p><strong>Complaint No. :</strong>{this.props.complaint}</p>
                        <p><strong>Tencode :</strong>{this.props.tencode}</p>
                        <p><strong>Unit Dispatched :</strong>{this.props.unit_dispatched}</p>
                        <p><strong>Disposition Description :</strong>{this.props.disposition_description}</p>
                        <p><strong>Block No :</strong>{this.props.block}</p>
                        <p><strong>Street Name :</strong>{this.props.street_name}</p>
                        <p><strong>Reporting Area :</strong>{this.props.rpa}</p>

                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </Modal>


            </div>
        );
    }
}

export default ListItem;
