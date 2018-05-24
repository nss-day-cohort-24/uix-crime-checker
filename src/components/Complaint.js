import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import './Filter.css';

//Checkboxes

class ComplaintInput extends Component {

    constructor(props) {
        super(props);
        /* set the initial checkboxState to true */
        this.state = {
          checkboxState: true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
      }


      /* prevent form submission from reloading the page */
    onSubmit(event) {

      const userInput = event.target.value;
      const key = event.target.id;
      event.preventDefault();
    }
    /* callback to change the checkboxState to false when the checkbox is checked */
    toggle(event) {
      this.setState({
        checkboxState: !this.state.checkboxState
      });
    }
    
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });
      this.props.handleChange(name, value);

      
    }


    render() {
      const checkedOrNot = [];
      checkedOrNot.push(
      
        const checkbox = (
        <span>
          <input 
          type="checkbox"
          onClick={this.toggle.bind(this)}
          />
          <label>Checkbox</label>
        </span>
      );
  
      return (
        <div>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="Suspicious Person" toggle={this.toggle.bind(this)} onChange={this.handleInputChange}
            onChange={this.handleInputChange}/>{' '}
                Suspicious Person
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="Intoxicated Person" toggle={this.toggle.bind(this)} onChange={this.handleInputChange}
            onChange={this.handleInputChange} />{' '}
                Intoxicated Person
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="Theft" toggle={this.toggle.bind(this)} onChange={this.handleInputChange}
            onChange={this.handleInputChange}/>{' '}
                Want Officer for Investigation
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="Business Check" toggle={this.toggle.bind(this)} onChange={this.handleInputChange}
            onChange={this.handleInputChange}/>{' '}
                Disorderly Person
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="Want Officer for Investigation" toggle={this.toggle.bind(this)} onChange={this.handleInputChange}
            onChange={this.handleInputChange}/>{' '}
                Theft
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="Traffic Violation" toggle={this.toggle.bind(this)} onChange={this.handleInputChange}
            onChange={this.handleInputChange}/>{' '}
                Cutting/Stabbing
            </Label>
            </FormGroup>
        </div>
      );
    }
  }
                



export default ComplaintInput;

