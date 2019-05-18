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
import playVideoIcon from '../images/icons/play-video.png';
import Navigation from '../components/navigation';

class Home extends Component {

    render() {
        return (
            <div className="home-view">
                <section className="header-section">
                    <div className="container">
                        <header>
                            <Navigation />
                            <div className="row pt-5">
                                <div className="col-12 pt-5">
                                    <h1 className="text-center">We Are Awesome Creative Agency</h1>
                                </div>
                                <div className="col-12">
                                    <p className="text-center pb-2 pt-3 pl-5 pr-5">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged.
                                    </p>
                                </div>
                                <div className="col-12 text-center pt-5 pb-5">
                                    <button type="button" className="btn btn-outline-primary">LEARN MORE</button>
                                </div>
                                <div className="col-12 text-center pb-5">
                                    <img src={dotsIcon} alt="dots" />
                                </div>
                            </div>
                        </header>
                    </div>
                </section>
                <section className="out-story-section">
                    <div className="container pb-5 pt-5">
                        <div className="row">
                            <div className="col-6 text-center">
                                <img src={imageOne} alt="img one" />
                            </div>
                            <div className="col-6">
                                <div className="col-12">
                                    <h2>OUR STORY</h2>
                                </div>
                                <div className="col-12">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap into
                                    </p>
                                    <p className="mt-2">
                                        electronic typesetting, remaining essentially unchanged. It was popularised in
                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                    </p>
                                </div>
                                <div className="col-12 text-left">
                                    <button type="button" className="btn btn-outline-primary">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="watch-our-story-section">
                    <div className="container pt-5 pb-5">
                        <div className="row">
                            <div className="col-12 text-center pt-5 pb-5">
                                <img src={playVideoIcon} alt="play video icon" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="expertise-section">
                    <div className="container pt-3 pb-5">
                        <div className="row">
                            <div className='col-12'>
                                <h2 className="text-center">EXPERTISE</h2>
                            </div>
                            <div className="col-12">
                                <p className="text-center">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
                            </div>
                            <div className='col-12 text-center'>
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-4 pr-0">
                                        <ExpertiseCard
                                            img={computerIcon}
                                            title="WEB DESIGN & DEVELOPMENT"
                                            paragraph="Lorem ipsum dolor sit amet proin gravida nibh vel velit"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 pr-0">
                                        <ExpertiseCard
                                            img={paintIcon}
                                            title="BRANDING IDENTITY"
                                            paragraph="Lorem ipsum dolor sit amet proin gravida nibh vel velit"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 pr-0">
                                        <ExpertiseCard
                                            img={mobileIcon}
                                            title="MOBILE APP"
                                            paragraph="Lorem ipsum dolor sit amet proin gravida nibh vel velit"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 pr-0">
                                        <ExpertiseCard
                                            img={searchEngineIcon}
                                            title="SEARCH ENGINE OPTIMIZATION"
                                            paragraph="Lorem ipsum dolor sit amet proin gravida nibh vel velit"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 pr-0">
                                        <ExpertiseCard
                                            img={gameIcon}
                                            title="GAME DEVELOPMENT"
                                            paragraph="Lorem ipsum dolor sit amet proin gravida nibh vel velit"
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 pr-0">
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
                        <div className="row text-center">
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
                                <button type="button" className="btn btn-outline-primary" >WE ARE HIRING</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="form-section">
                    <div className="container pt-5 pb-5">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="col-12">
                                    <h2>GIVE US A GOOD NEWS</h2>
                                </div>
                                <div className="col-12 pt-2">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="col-12 pt-2">
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="col-12 pt-2">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="col-12 pt-2">
                                    <textarea type="text" className="form-control" placeholder="Your Message" />
                                </div>
                                <div className="col-12 pt-2">
                                    <button type="button" className="btn btn-outline-primary" >
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