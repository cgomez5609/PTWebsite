import React from 'react';
import Footer from '../footer/Footer.js';
import './ContactPage.css';
import Header from '../header/Header.js';


const ContactPage = (props) => {
  return (
    <div>
      <Header />
      <div className="contact-page-main">
        <div className="contact-page">
          <div className="container">
            <h1 className="contact-title">Contact Me</h1>
            <div className="row contact-box">
              <div className="col-lg-6 col-xs-12">
                <div className="contact-text">
                  <p>Feel free to contact me with any questions you may have.</p>
                </div>
              </div>
              <div className="col-lg-6 col-xs-12">
                <div className="message-container">
                  <form className="contact-message">
                    <div className="form-group">
                      <input type="text" className="form-control" id="" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                      <textarea type="text" className="form-control" id="" rows="7" placeholder="Enter your message here..." />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container"><hr></hr></div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
