import React from 'react';
import './PersonalTrainingPage.css';
import Footer from '../footer/FooterHomePage.js';
import Gym1on1 from './plans/Gym1on1.js';
import GymGroup from './plans/GymGroup.js';
import Header from '../header/HeaderCustom.js';
import Home1on1 from './plans/Home1on1.js';
import HomeGroup from './plans/HomeGroup.js';


const PersonalTrainingPage = (props) => {
  return (
    <div>
      <div className="personal-training-main">
        <Header />
          <div className="container">
            <h1 className="pt-title">Personal Training</h1>
            <div className="row">
              <Gym1on1 />
              <GymGroup />
              <HomeGroup />
              <Home1on1 />
            </div>
          </div>
          <Footer />
      </div>
    </div>
  );
};

export default PersonalTrainingPage;
