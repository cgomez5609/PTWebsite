import React from 'react';
import './plans.css';

const NutritionPlan = (props) => {
  return (
    <div className="col-lg-8">
      <div className="nutrition-plan-container">
        <div className="nutrition-plan">
          <div className="top-section-nutritionplan"></div>
          <p className="nutrition-plan-pricing"><strong>$150</strong>/per hour</p>
          <hr></hr>
          <div className="nutrition-plan-description">
            <p className="">I come to your home and we have a nutrition
              session that involves educating you on the correct way of eating for YOUR body.
              This is not a diet, it is learning about food as fuel and how to fuel YOUR body
              correctly during the day. Then we will create a food plan that you will follow
              for 2 weeks, based on foods you like and foods that fit into your lifestyle.
              The plan and the foods  will get you to reach your health and fitness goals.</p>
              <br></br>
              <p className="">During the 2 weeks I encourage you to email me every day with
                your food logs. This way I can be right with you each step making sure that
                you feel good and that you are staying on the right path.  If you have any
                questions or concerns, I will be right there to answer your questions and
                help you with any snags!!! After the 2 weeks,  my clients go on a grocery
                shopping trip with me at their preferred grocery store. At this point,
                you will "get" how to eat correctly and will be able to incorporate a
                ton of new exciting healthy foods into your plan.</p>
              <br></br>
              <p className="">The first session usually lasts
                2 hours and the shopping can be between 1-2 hours. All the emails/texts/phone
                calls are included in the price for the 2 weeks. I offer an extension plan
                for clients who would like to continue doing daily food logs with me past the
                2 weeks. Certain clients  are not  ready to continue on their own, just yet,
                and need a week or two of more accountability and suggestions/advice/communication. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPlan;
