import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/header/Header.js';
import HomePage from '../components/homepage/HomePage.js';
import BioPage from '../components/bio/BioPage.js';
import TestPage from '../components/testimonials/TestPage.js';
import ContactPage from '../components/contact/ContactPage.js';
import PageNotFound from '../components/notfound/PageNotFound.js';
import PersonalTrainingPage from '../components/pricing/PersonalTrainingPage.js';
import Nutrition from '../components/pricing/Nutrition.js';


const Router = () => {

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact={true}/>
          <Route path="/bio" component={BioPage} />
          <Route path="/testimonials" component={TestPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/pricing" component={PersonalTrainingPage} />
          <Route path="/nutrition" component={Nutrition} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )

}

export default Router;
