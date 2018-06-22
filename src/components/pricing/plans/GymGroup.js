import React from 'react';
import './plans.css';

const GymGroup = (props) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12">
      <div className="plans gym-group">
        <div className="plans-top-group"></div>
        <h3 className="plans-title">Gym <span className="group">Group</span> Classes</h3>
        <hr></hr>
        <p className="plans-pricing"><strong>$79</strong>/per hour</p>
        <hr></hr>
        <p className="plans-description">Once you find your friends to do a group class with,
          let me know what area works for your group and I will find the right gym. <br></br>
          I encourage you to find friends of all fitness levels and of all ages because
          you will inspire each other as I make sure that no one is uncomfortable and everyone
          gets a great workout. <br></br>Group classes are a ton of fun and they lower the cost  per person.
          Prices vary based on the number of people in the group.</p>
      </div>
    </div>
  );
};

export default GymGroup;
