import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/components/navigation.scss';
class Navigation extends Component {
    render() {
        return (
            <nav className="nav-component">
                <div className="row pt-2">
                    <div className="col-3">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="offset-3 col-6 pt-2 pr-0">
                        <ul className="list-inline">
                            <li className="list-inline-item mr-3">HOME</li>
                            <li className="list-inline-item mr-3">ABOUT</li>
                            <li className="list-inline-item mr-3">EXPERTISE</li>
                            <li className="list-inline-item mr-3">TEAMS</li>
                            <li className="list-inline-item mr-3">WORKS</li>
                            <li className="list-inline-item mr-3">PEOPLE SAY</li>
                            <li className="list-inline-item">CONTACT</li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;
