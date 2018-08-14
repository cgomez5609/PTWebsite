import React from 'react';
import NutritionPlan from './plans/NutritionPlan.js';
import Footer from '../footer/Footer.js';
import Header from '../header/HeaderCustom.js';
import './Nutrition.css';
import Healthy from '../images/jamie.jpg';

const Nutrition = () => {
  return (
    <div className="nutrition-main">
      <Header />
      <div className="nutrition-page container-fluid">
        <h1 className="nutrition-title">Nutrition</h1>
        <div className="container">
          <div className="row">
            <NutritionPlan />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Nutrition;
