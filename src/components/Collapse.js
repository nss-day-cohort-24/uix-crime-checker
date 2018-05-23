import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Filter.css';

class CollapseExample extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <div className="filterBtn" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.title}</div>
                <Collapse isOpen={this.state.collapse}>
                    <div>{this.props.form}</div>
                </Collapse>
            </div>
        );
    }
}

export default CollapseExample;