import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import './Filter.css';

class ComplaintInput extends Component {

    constructor(props) {
        super(props);
        /* set the initial checkboxState to true */
        this.state = {
          checkboxState: true
        }
      }
      /* prevent form submission from reloading the page */
    onSubmit(event) {
        event.preventDefault();
      }
      /* callback to change the checkboxState to false when the checkbox is checked */
    toggle(event) {
      this.setState({
        checkboxState: !this.state.checkboxState
      });
    }
    render() {
      const checkedOrNot = [];
      checkedOrNot.push(
        console.log("Fucking checkbox"));
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
                <Input type="checkbox" />{' '}
                Suspicious Person
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" />{' '}
                Intoxicated Person
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" />{' '}
                Want Officer for Investigation
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" />{' '}
                Disorderly Person
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" />{' '}
                Theft
            </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" />{' '}
                Cutting/Stabbing
            </Label>
            </FormGroup>
        </div>
      );
    }
  }
                {/* <div>Suspicious Person</div>
                <div>Intoxicated Person</div>
                <div>Want Officer for Investigation</div>
                <div>Disorderly Person</div>
                <div>Theft</div>
                <div>Cutting/Stabbing</div>
                <div>Shooting</div>
                <div>Holdup/Robbery</div>
                <div>Person with Weapon</div>
                <div>Fight/Assault</div>
                <div>Prowler</div>
                <div>Person Indecently Exposed</div>
                <div>Suicidal Person</div>
                <div>Corpse / D.O.A.</div>
                <div>Dangerous / Injured Animal</div>
                <div>Bomb Threat</div>
                <div>Kidnapping</div>
                <div>Burglary - Residence</div>
                <div>Burglary - Non-Residence</div>
                <div>Item / Vehicle is Stolen</div>
                <div>Gang Activity</div>
                <div>Occult Activity</div>
                <div>Shots Fired</div>
                <div>Prisoner Escapee</div>
                <div>Business Check</div>
                <div>Barricaded Suspect</div>
                <div>Sniper</div>
                <div>Personnel in Serious Danger</div>
                <div>Riot/Disorderly Crowd</div>
                <div>Explosion</div>
                <div>Active Aggressor</div> */}



export default ComplaintInput;

