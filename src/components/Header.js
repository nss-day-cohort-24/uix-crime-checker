import React, {Component} from 'react';
import './Header.css';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import Logo from '../img/CrimeCheck_ CClogoWhite.png';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class Header extends Component {
       state = {
          isOpen: false,
          modal: false
          
        };
    
    toggleNavbar = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });

    this.toggle = this.toggle.bind(this);

    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    render(){
        return(
            <div>
            <Navbar expand="md" className="topNav">
              <img src={Logo} className="header-logo" alt="Crime Checker logo"></img>
              <button type="button" className="navbar-toggler" onClick={this.toggleNavbar} ><i className="fas fa-bars"></i></button>


              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink onClick={this.toggle}>Precinct Contacts</NavLink>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}>Precinct Contacts</ModalHeader>
                      <ModalBody>
                        <div><h6>Police Facility Locations </h6>
                              <p>Metropolitan Justice Center (Headquarters) <br/>
                              3055 Lebanon Pike, Nashville, TN 37214 <br/> 
                              <strong>615-862-7400</strong> 
                              </p>
                        </div>
                        <div> 
                              <p>Central Precinct <br/>
                              601 Korean Veterans Boulevard Nashville, TN 37203 <br/> 
                              <strong>615-862-7611</strong> 
                              </p>
                        </div>
                        <div> 
                              <p>East Precinct <br/>
                              936 E. Trinity Lane Nashville, TN 37207 <br/> 
                              <strong>615-862-7600</strong> 
                              </p>
                        </div>
                        <div> 
                              <p>Hermitage Precinct <br/>
                              3701 James Kay Lane, Hermitage, TN 37076 <br/> 
                              <strong>615-880-1776</strong> 
                              </p>
                        </div>
                        <div> 
                              <p>Madison Precinct <br/>
                              400 Myatt Drive, Madison, TN 37115 <br/> 
                              <strong>615-880-3111</strong> 
                              </p>
                        </div>
                        <div> 
                              <p>Midtown Hills Precinct <br/>
                              1443 12th Avenue South, Nashville, TN 37203 <br/> 
                              <strong>615-880-1411</strong> 
                              </p>
                        </div>
                        <div> 
                              <p>North Precinct <br/>
                              2231 26th Ave. North, Nashville, TN 37208 <br/> 
                              <strong>615-862-4410</strong> 
                              </p>
                        </div>
                        <div> 
                              <p>South Precinct <br/>
                              5101 Harding Place, Nashville, TN 37211 <br/> 
                              <strong>615-862-7744</strong> 
                              </p>
                        </div>
                        <div> 
                              <p>West Precinct <br/>
                              5500 Charlotte Pike, Nashville, TN 37209 <br/> 
                              <strong>615-862-7747</strong> 
                              </p>
                        </div>
                      </ModalBody>
                    </Modal>
                  </NavItem>
                  <NavItem>
                    <NavLink href="http://www.nashville.gov/Police-Department/Safety-Information.aspx" target="_blank">Resources</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://xd.adobe.com/view/ac66109f-fd30-4707-4486-17c2e2dd1d45-da57/" target="_blank">Prototype</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/nss-day-cohort-24/uix-crime-checker" target="_blank">GitHub Repo</NavLink>
                  </NavItem> 
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
    }

}

export default Header;
