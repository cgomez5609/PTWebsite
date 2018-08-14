import React from 'react';
import { NavLink } from 'react-router-dom';


const HeaderHomepage = (props) => {
  return (
    <div>
      <header id="header-homepage">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg">
            <NavLink activeClassName="when-active" className="navbar-brand debs-name" to="/" exact={true}>DEBORAH <span style={{color:"#fefefe"}}>STERN</span></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse navbar-links" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink activeClassName="when-active" className="nav-link header-links" to="/bio" style={{color:"#fefefe"}}>Bio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="when-active" className="nav-link header-links" to="/testimonials" style={{color:"#fefefe"}}>Testimonials</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="when-active" className="nav-link header-links" to="/pricing" style={{color:"#fefefe"}}>Personal Training</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="when-active" className="nav-link header-links" to="/nutrition" style={{color:"#fefefe"}}>Nutrition</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="when-active" className="nav-link header-links" to="/contact" style={{color:"#fefefe"}}>Contact</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderHomepage;
