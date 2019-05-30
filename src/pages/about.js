import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../styles/pages/about.scss';

export default class App extends Component {

  state = { secondStep: false };

  onChange = () => {
    this.setState({secondStep: !this.state.secondStep});
  }

  render() {
    return (
      <div className="example-view">
        <h1>Wizard</h1>
        <section>
          <div className="container">

            {!this.state.secondStep && (
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="row  shadow pt-sm-5 pr-sm-5 pl-sm-5 pb-sm-5">
                    <div className="col-12">
                      <h1>We save you money moving anything, anywhere</h1>
                    </div>
                    <div className="col-12 pt-3">
                      <p>The UK's favourite delivery, removals and transport marketplace</p>
                    </div>
                    <div className="col-12 pt-2">
                      <select className="form-control" placeholder="What are you moving?" >
                        <option>What are you moving?</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 pt-2">
                      <input text="text" className="form-control" placeholder="Pick Up Location" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 pl-lg-0 pt-2">
                      <input text="text" className="form-control" placeholder="Drop Off Location" />
                    </div>

                    <div className="col-12 offset-md-6 col-md-6 pl-lg-0 pt-2">
                      <button type="button" className="btn btn-primary col-12" onClick={this.onChange}>Get Instant Prices</button>
                      <div className="row">
                        <div className="col-12 text-right">
                          <a>Already received a quote?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}

              {this.state.secondStep && (
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="row  shadow pt-sm-5 pr-sm-5 pl-sm-5 pb-sm-5">
                    <div className="col-12">
                      <h1>Second Step</h1>
                    </div>
                    <div className="col-12 pt-3">
                      <p>The UK's favourite delivery, removals and transport marketplace</p>
                    </div>
                    <div className="col-12 pt-2">
                      <select className="form-control" placeholder="What are you moving?" >
                        <option>What are you moving?</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 pt-2">
                      <input text="text" className="form-control" placeholder="Pick Up Location" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 pl-lg-0 pt-2">
                      <input text="text" className="form-control" placeholder="Drop Off Location" />
                    </div>

                    <div className="col-12 offset-md-6 col-md-6 pl-lg-0 pt-2">
                      <button type="button" className="btn btn-primary col-12"  onClick={this.onChange}>Back</button>
                      <div className="row">
                        <div className="col-12 text-right">
                          <a>Already received a quote?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}


          </div>
        </section>
      </div>

    )
  }
}
