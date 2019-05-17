import React, { Component } from 'react';
import '../styles/pages/home.scss';

class Home extends Component {

    render() {
        return (
            <div className="home-view">
                <section className="header-section">
                    <div className="container">
                        <header>
                            <div className="row">
                                <div className="col-12">
                                    <h1>We Are Awesome Creative Agency</h1>
                                </div>
                                <div className="col-12">
                                    <p>
                                        This is photoshop's version of Lorem Ipsum. Proin gravida nibh vel veilt auctor aliquet
                                </p>
                                </div>
                            </div>
                        </header>
                    </div>
                </section>
                <section className="out-story-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                            </div>
                            <div className="col-6">
                                <div className="col-12">
                                    <h2>OUR STORY</h2>
                                </div>
                                <div className="col-12">
                                    <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
                                </div>
                                <div className="col-12">
                                    <button type="button">Learn More</button>
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
                                <h2>EXPERTISE</h2>
                            </div>
                            <div className="col-12">
                                <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
                            </div>
                            <div className='col-12'>
                                {/* Cards */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="meet-our-organization-team-section">
                    <div className="container">
                        <div className="row">
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
                    </div>
                </section>
                <section className="form-section">
                    <div clasName="container">
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