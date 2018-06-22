import React from 'react';
import './plans.css';

const Gym1on1 = (props) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12">
      <div className="plans gym-on1">
        <div className="plans-top-one"></div>
        <h3 className="plans-title"><span className="one">One-on-One</span> Personal training in a gym</h3>
        <hr></hr>
        <p className="plans-pricing"><strong>$75</strong>/per hour</p>
        <hr></hr>
        <p className="plans-description">There are several private trainers gyms where I train my clients.
          If you prefer being in a gym atmosphere, let me know where you live or what area is best for
          you and I can find a gym that you enjoy and that feels comfortable.<br></br> These gyms do not require
          a membership. Prices start at $75 per hour.</p>
      </div>
    </div>
  );
};

export default Gym1on1;
