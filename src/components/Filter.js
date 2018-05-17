import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Filter.css';
 
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpenLeft: false
        };
    }
 
    componentDidMount() {
        Modal.setAppElement(this.el);
    }
  
  render() {
    return (
         <div ref={ref => this.el = ref}>
                <button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                    Click me to open left pane with 20% width!
                </button>
            <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                from='left'
                width='85%'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <div>And I am pane content on left.</div>
            </SlidingPane>
        </div>
    );
  }
}

export default Filter;
