import React, {Component} from 'react';
import './TestPage.css';
import Testimonial from "./testimonial/testimonial.js";
import {Clients} from './Clients.js';
import Header from '../header/HeaderHomepage.js';
import Footer from '../footer/Footer.js';

class TestPage extends Component {
  render() {
    return (
      <div className="testimonial-page">
        <Header />
        <div className="">
          <div className="container">
            <h1 className="testimonial-title">Success Stories</h1>
            <div className="main-test-box">
              <div className="row" style={{marginBottom: "30px"}}>
                <div className="col-lg-6 col-sm-12 col-xm-12">
                  <img className="main-image" src={Clients[3].photo} alt="Photo here" width="450" height="350"/>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <p className="main-test">"{Clients[3].testimonial}"</p>
                  <p className="main-test">{Clients[3].name}</p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <div className="row">
                <Testimonial name={Clients[0].name} testimonial={Clients[0].testimonial} photo={Clients[0].photo} ref="child"/>
                <Testimonial name={Clients[1].name} testimonial={Clients[1].testimonial} photo={Clients[1].photo} ref="child"/>
                <Testimonial name={Clients[2].name} testimonial={Clients[2].testimonial} photo={Clients[2].photo} ref="child"/>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default TestPage;
