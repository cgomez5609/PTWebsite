import React from 'react';
import './plans.css';

const HomeGroup = (props) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12 plan">
      <div className="plans home-group">
        <div className="plans-top-group"></div>
        <h3 className="plans-title">In Home <span className="group">Group</span> classes</h3>
        <hr></hr>
        <p className="plans-pricing"><strong>$79</strong>/per hour</p>
        <hr></hr>
        <p className="plans-description">Get a few of your friends together and enjoy the comradery
          as I lead a fun hour of fitness. <br></br> In the comfort of your home, at the park, at the lake or
          in your backyard. <br></br>I will make sure to challenge each one of you at your own levels of fitness
          but in a group setting. I encourage you to find friends of all fitness levels and of all ages
          because you will inspire each other as I make sure that no one is uncomfortable and everyone
          gets a great workout. <br></br>Group classes are a ton of fun and they lower the cost  per person.
          Prices vary based on the number of people in the group.</p>
      </div>
    </div>
  );
};

export default HomeGroup;
