import React, {Component} from 'react';
import '../TestPage.css';

class Testimonial extends Component {
  render() {
    return (
      <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 secondary-test">
        <div className="sub-testimonials" style={{marginTop: "20px"}}>
          <img src={this.props.photo} alt="nothing found" className="test-image" />
          <p className="testimonials-name" ref="testimonial">"{this.props.testimonial}"</p>
          <p className="testimonials-name" ref="name">{this.props.name}</p>
        </div>
      </div>
    );
  }
};

export default Testimonial;
