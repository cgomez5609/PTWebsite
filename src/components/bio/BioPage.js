import React from 'react';
import './BioPage.css';
import BioPhoto from '../images/DebsPhoto.webp';
import Footer from '../footer/FooterHomePage.js';
import Header from '../header/HeaderCustom.js';

const BioPage = (props) => {
  return (
    <div className="bio-page-main">
      <Header />
        <div className="container">
          <h1 className="bio-title">About Me</h1>
          <div className="row about-me-container">
            <div className="col-lg-6 col-xs-12">
              <img className="bio-photo" src={BioPhoto} alt="No photo found"/>
            </div>
            <div className="col-lg-6 col-xs-12">
              <p className="bio-info">Deborah Stern is a certified Personal Trainer and Nutrition Coach.
                She has her degree in Psychology from Depaul University and has spent
                the past decade focusing on the principles and processes of Holistic
                Nutrition and proper exercise. <br></br>Deborah's passion for health and fitness
                has motivated her to educate her clients on the importance of eating for
                their health and longevity and exercising correctly to achieve body-fat
                loss, gaining lean muscle mass, increasing energy levels, improving
                balance and posture and feeling happy and healthy at the end of each
                session. <br></br>Deborah works with clients of all ages and fitness levels.
                After working with Deborah, her clients look at food as fuel for the
                body and mind and they make fitness a part of their lifestyle. With this
                approach, Deborah's clients have the tools to acheive their goals of
                health and fitness.</p>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
};

export default BioPage;
