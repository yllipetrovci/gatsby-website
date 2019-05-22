import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/components/navigation.scss';
class Navigation extends Component {

    state = { openMobileNav: false };

    handleClick = () => {
        console.log('clicked');
        this.setState({ openMobileNav: !this.state.openMobileNav });
    }

    render() {
        return (
            <nav className="nav-component">
                <div className="row pt-2">
                    <div className="col-3">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="col-9 d-block d-md-none text-right">
                        <button type="button" onClick={this.handleClick}>
                            <div className="menu-icon">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </button>
                    </div>

                    {(this.state.openMobileNav) &&
                        <div className="d-block d-md-none offset-7 col-5 mobile-nav-list">
                            <ul className= {this.state.openMobileNav ? "active nav-mob-ul shadow": "nav-mob-ul shadow" } >
                                <li className="text-center">HOME</li>
                                <li className="text-center">ABOUT</li>
                                <li className="text-center">EXPERTISE</li>
                                <li className="text-center">TEAMS</li>
                                <li className="text-center">WORKS</li>
                                <li className="text-center">PEOPLE SAY</li>
                                <li className="text-center">CONTACT</li>
                            </ul>
                        </div>}
                    <div className="d-none d-md-block offset-lg-2 offset-md-0 col-md-9 col-lg-7 pt-2 pr-0 text-right">
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
