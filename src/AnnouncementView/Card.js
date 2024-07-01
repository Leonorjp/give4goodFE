import React from 'react';
import CarouselIndicators from './CarouselIndicators';
import CustomButton from './Button';
import './Card.css';
import InsertImage from '../images/InsertImage.jpg';

const Card = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
        <div className="card-image">
        <img src={InsertImage} alt="description" />
          <CarouselIndicators />
        </div>
        <div className="card-navigation">
          <div className="backArrow">
            <span className="left-arrow">&lt; back</span>
          </div>
          </div>

      </div> 
      <div className="card-text">
  <div className="text-and-button">
    <div className="text-container">
      <h1 className="card-title">Name</h1>
      <h2 className="card-category">Category</h2>
      <p className="card-description">
      Lorem ipsum dolor sit amet. Non delectus accusamus et beatae alias qui quam earum id voluptatem distinctio qui architecto magnam ut galisum libero aut voluptates doloribus. 33 consectetur nihil ut sunt deleniti non sunt esse! Est illo voluptatem est voluptatem rerum.
      </p>
    </div>
    <CustomButton text="Claim" />
  </div>
</div>
      </div>
    </div>
    
  );
};

export default Card;