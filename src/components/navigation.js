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
                    <div className="offset-1 col-8 pt-2 pr-0">
                        <ul className="list-inline">
                            <li className="list-inline-item">HOME</li>
                            <li className="list-inline-item">ABOUT</li>
                            <li className="list-inline-item">EXPERTISE</li>
                            <li className="list-inline-item">TEAMS</li>
                            <li className="list-inline-item">WORKS</li>
                            <li className="list-inline-item">PEOPLE SAY</li>
                            <li className="list-inline-item">PEOPLE SAY</li>
                            <li className="list-inline-item">CONTACT</li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;
