import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div>
      <footer className="page-footer font-small cyan darken-3 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5" align="center">
              <div className="mb-5 flex-center">
                <a className="">
                  <i className="icons fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a className="">
                  <i className=" icons fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a className="">
                  <i className="icons fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a className="">
                  <i className="icons fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a className="">
                  <i className="icons fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a className="">
                  <i className="icons fa fa-pinterest fa-lg white-text fa-2x"> </i>
                </a>
              </div>
            </div>
          </div>
          <div className="copyright text-center py-3">© 2018 Copyright: Chris Gomez</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
