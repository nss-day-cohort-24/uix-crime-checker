import React, {Component} from 'react';
import './Header.css';
import Logo from '../img/CrimeCheck_ CClogoWhite.png'

class Header extends Component {

    render(){
        return(
            <div className="topNav row">
                <div className="col-3 mr-auto">
                    <img src={Logo} className="header-logo" />
                </div>
                <div className="col-auto ml-auto">
                    <p>MENU</p>
                </div>
            </div>
        );
    }

}

export default Header;
