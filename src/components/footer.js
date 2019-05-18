import React from 'react';
import '../styles/components/footer.scss';
import logo from '../images/logo.png';
import fbIcon from '../images/icons/fb-icon.png';
import instagramIcon from '../images/icons/instagram.png';
import sendMSGIcon from '../images/icons/send-msg.png';
import youtubeIcon from '../images/icons/youtube.png';
import twitterIcon from '../images/icons/twitter.png';
import googleIcon from '../images/icons/google.png';
import locationIcon from '../images/icons/location.png';
import phoneIcon from '../images/icons/phone-ico.png';

const Footer = () => {
    return (
        <footer className="footer-component">
            <div className="container pt-4 pb-4">
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-12">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="col-12 pt-3">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <p>
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-12 pt-3">
                                <h5>OUR STUDIO</h5>
                            </div>
                            <div className="col-12 pt-3">
                                <div className="row">
                                    <div className="col-1">
                                        <img src={locationIcon} alt="location" />
                                    </div>
                                    <div className="col-11">
                                        <p>New York, NYC</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <img src={phoneIcon} alt="location" />
                                    </div>
                                    <div className="col-11">
                                        <p>(+62) 21-2224 3333</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-12 pt-3">
                                <h5>STAY IN TOUCH</h5>
                            </div>
                            <div className="col-12 pt-3">
                                <div className="row ">
                                    <div className="col-6">
                                        <input type="text" placeholder="Subscribe our news letter" />
                                    </div>
                                    <div className="text-left col-3">
                                        <button type="button">
                                            <img src={sendMSGIcon} alt="send message" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 pt-4">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <img src={fbIcon} alt="facebook" />
                                    </li>
                                    <li className="list-inline-item">
                                        <img src={twitterIcon} alt="twitter" />
                                    </li>
                                    <li className="list-inline-item">
                                        <img src={instagramIcon} alt="instagram" />
                                    </li>
                                    <li className="list-inline-item">
                                        <img src={googleIcon} alt="google plus" />
                                    </li>
                                    <li className="list-inline-item">
                                        <img src={youtubeIcon} alt="youtube" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-6">
                        <ul className="list-inline">
                            <li className="list-inline-item">HELP</li>
                            <li className="list-inline-item">TERMS & CONDITION</li>
                            <li className="list-inline-item">PRIVACY</li>
                        </ul>
                    </div>
                    <div className="offset-2 col-3">
                        <p>Copyright © {new Date().getFullYear()} - Lorem</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;