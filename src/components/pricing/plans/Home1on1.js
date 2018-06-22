import React from 'react';
import './plans.css';

const Home1on1 = (props) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12">
      <div className="plans home-on1">
        <div className="plans-top-one"></div>
        <h3 className="plans-title"><span className="one">One-on-One</span> in Home Personal Training</h3>
        <hr></hr>
        <p className="plans-pricing"><strong>$85</strong>/per hour</p>
        <hr></hr>
        <p className="plans-description">If you do not like being in a gym atmosphere,
          we can workout in the comfort of your home. <br></br>I will create exercise plans that
          involve strength training, core work, balance, coordination, stretching and
          endurance work in small spaces with minimal equipment. <br></br>Sessions are 1 hour and
          start at $85. The price will increase slightly if you live 25 miles or more.</p>
      </div>
    </div>
  );
};

export default Home1on1;
