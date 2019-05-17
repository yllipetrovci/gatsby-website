import React, { Component } from 'react';
import '../styles/pages/home.scss';
//icons
import dotsIcon from '../images/icons/dots.png';
import heartIcon from '../images/icons/heart.png';
import computerIcon from '../images/icons/pc.png';
import mobileIcon from '../images/icons/mobile.png';
import paintIcon from '../images/icons/paint.png';
import gameIcon from '../images/icons/game.png';
import searchEngineIcon from '../images/icons/search-engine.png';
//backgrounds
import imageOne from '../images/backgrounds/img-one.png';
import ExpertiseCard from '../components/expertise-card';

class Home extends Component {

    render() {
        return (
            <div className="home-view">
                <section className="header-section">
                    <div className="container">
                        <header>
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="text-center">We Are Awesome Creative Agency</h1>
                                </div>
                                <div className="col-12">
                                    <p className="text-center">
                                        This is photoshop's version of Lorem Ipsum. Proin gravida nibh vel veilt auctor aliquet
                                    </p>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="button" className="btn btn-outline-primary">LEARN MORE</button>
                                </div>
                                <div className="col-12 text-center">
                                    <img src={dotsIcon} alt="dots image" />
                                </div>
                            </div>
                        </header>
                    </div>
                </section>
                <section className="out-story-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 text-center">
                                <img src={imageOne} alt="img one" />
                            </div>
                            <div className="col-6">
                                <div className="col-12">
                                    <h2>OUR STORY</h2>
                                </div>
                                <div className="col-12">
                                    <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
                                </div>
                                <div className="col-12 text-left">
                                    <button type="button" className="btn btn-outline-primary">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="watch-our-story-section">
                    <div className="container">
                        <div className="row">
                            {/* IMG */}
                        </div>
                    </div>
                </section>
                <section className="expertise-section">
                    <div className="container">
                        <div className="row">
                            <div className='col-12'>
                                <h2 className="text-center">EXPERTISE</h2>
                            </div>
                            <div className="col-12">
                                <p className="text-center">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
                            </div>
                            <div className='col-12 text-center'>
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <ExpertiseCard
                                            img={computerIcon}
                                            title="WEB DESIGN & DEVELOPMENT"
                                            paragraph="Lorem ipsum dolor sit amet proin gravida nibh vel velit"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <ExpertiseCard
                                            img={paintIcon}
                                            title="BRANDING IDENTITY"
                                            paragraph="Lorem ipsum dolor sit amet proin gravida nibh vel velit"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <ExpertiseCard
                                            img={mobileIcon}
                                            title="MOBILE APP"
                                            paragraph="Lorem ipsum dolor sit amet proin gravida nibh vel velit"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <ExpertiseCard
                                            img={searchEngineIcon}
                                            title="SEARCH ENGINE OPTIMIZATION"
                                            paragraph="Lorem ipsum dolor sit amet proin gravida nibh vel velit"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <ExpertiseCard
                                            img={gameIcon}
                                            title="GAME DEVELOPMENT"
                                            paragraph="Lorem ipsum dolor sit amet proin gravida nibh vel velit"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <ExpertiseCard
                                            img={heartIcon}
                                            title="GAME DEVELOPMENT"
                                            paragraph="Lorem ipsum dolor sit amet proin gravida nibh vel velit"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="meet-our-organization-team-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>MEET OUR AMAIZING TEAM</h2>
                            </div>
                            <div className="col-12">
                                <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
                            </div>
                            <div className="col-12">
                                {/* Cards */}
                            </div>
                            <div className="col-12">
                                <p>Become part of our dream team, let's join us!</p>
                            </div>
                            <div className="col-12">
                                <button type="button" >WE ARE HIRING</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="form-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>GIVE US A GOOD NEWS</h2>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="col-12">
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div className="col-12">
                                    <input type="text" placeholder="Email" />
                                </div>
                                <div className="col-12">
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div className="col-12">
                                    <textarea type="text" placeholder="Your Message" />
                                </div>
                                <div className="col-12">
                                    <button type="button" >
                                        SUBMIT
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;