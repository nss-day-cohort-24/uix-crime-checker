import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

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
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.title}</Button>
                <Collapse isOpen={this.state.collapse}>
                    <div>
                        Anim pariatur cliche reprehenderit,
                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default CollapseExample;