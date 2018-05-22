import React, {Component} from 'react';
import './Header.css';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import Logo from '../img/CrimeCheck_ CClogoWhite.png';

class Header extends Component {
       state = {
          isOpen: false
        };
    
    toggleNavbar = () => {
    this.setState({
        isOpen: !this.state.isOpen
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
                    <NavLink href="https://xd.adobe.com/view/ac66109f-fd30-4707-4486-17c2e2dd1d45-da57/" target="_blank">Group xD File</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/nss-day-cohort-24/uix-crime-checker" target="_blank">Crime Checker GitHub</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Additional Resources 1</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Additional Resources 2</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Additional Resources 3</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
    }

}

export default Header;
