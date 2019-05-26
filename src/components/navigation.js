import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/components/navigation.scss';
import CustomLink from '../components/customLink';
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
                            <ul className={this.state.openMobileNav ? "active nav-mob-ul shadow" : "nav-mob-ul shadow"} >
                                <li className="text-center">
                                    <CustomLink activeClassName="active" className="nav-link" to="/" exact="true">
                                        HOME
                                </CustomLink>
                                </li>
                                <li className="text-center">
                                    <CustomLink activeClassName="active" className="nav-link" to="/about" exact="true">
                                        ABOUT
                                </CustomLink>
                                </li>
                                <li className="text-center">
                                    <CustomLink activeClassName="active" className="nav-link" to="/epertise" exact="true">
                                        EXPERTISE
                                </CustomLink>
                                </li>
                                <li className="text-center">
                                    <CustomLink activeClassName="active" className="nav-link" to="/teams" exact="true">
                                        TEAMS
                                </CustomLink>
                                </li>
                                <li className="text-center">
                                    <CustomLink activeClassName="active" className="nav-link" to="/works" exact="true">
                                        WORKS
                                </CustomLink>
                                </li>
                                <li className="text-center">
                                    <CustomLink activeClassName="active" className="nav-link" to="/peopleSay" exact="true">
                                        PEOPLE SAY
                                </CustomLink>
                                </li>
                                <li className="text-center">
                                    <CustomLink activeClassName="active" className="nav-link" to="/contact" exact="true">
                                        CONTACT
                                </CustomLink>
                                </li>
                            </ul>
                        </div>}
                    <div className="d-none d-md-block offset-lg-2 offset-md-0 col-md-9 col-lg-7 pt-2 pr-0 text-right">
                        <ul className="list-inline">
                            <li className="list-inline-item mr-3">
                                <CustomLink activeClassName="active" className="nav-link" to="/" exact="true">
                                    HOME
                                </CustomLink>
                            </li>
                            <li className="list-inline-item mr-3">
                                <CustomLink activeClassName="active" className="nav-link" to="/about" exact="true">
                                    ABOUT
                                </CustomLink>
                            </li>
                            <li className="list-inline-item mr-3">
                                <CustomLink activeClassName="active" className="nav-link" to="/epertise" exact="true">
                                    EXPERTISE
                                </CustomLink>
                            </li>
                            <li className="list-inline-item mr-3">
                                <CustomLink activeClassName="active" className="nav-link" to="/teams" exact="true">
                                    TEAMS
                                </CustomLink>
                            </li>
                            <li className="list-inline-item mr-3">
                                <CustomLink activeClassName="active" className="nav-link" to="/works" exact="true">
                                    WORKS
                                </CustomLink>
                            </li>
                            <li className="list-inline-item mr-3">
                                <CustomLink activeClassName="active" className="nav-link" to="/peopleSay" exact="true">
                                    PEOPLE SAY
                                </CustomLink>
                            </li>
                            <li className="list-inline-item">
                                <CustomLink activeClassName="active" className="nav-link" to="/contact" exact="true">
                                    CONTACT
                                </CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;
