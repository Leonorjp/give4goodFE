import React from 'react';
import CarouselIndicators from './CarouselIndicators';
import Button from './Button';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
        <div className="card-image">
          <img src="https://via.placeholder.com/200" alt="placeholder" />
          
          <CarouselIndicators />
        </div>
        <div className="card-navigation">
            <span className="left-arrow">&lt; back</span>
          </div>

      </div> 
      <div className="card-text">
  <div className="text-and-button">
    <div className="text-container">
      <h1 className="card-title">Name</h1>
      <h2 className="card-category">Category</h2>
      <p className="card-description">
        Lorem ipsum dolor sit amet. Non delectus accusamus et beatae alias qui quam earum id voluptatem distinctio qui architecto magnam ut galisum libero aut voluptates doloribus. 33 consectetur nihil ut sunt deleniti non sunt esse!
        Est illo voluptatem est voluptatem rerum id tenetur amet ut corrupti eaque ea fuga consequatur qui porro facere hic laborum animi.
      </p>
      <p className="card-description">
        Est illo voluptatem est voluptatem rerum id tenetur amet ut corrupti eaque ea fuga consequatur qui porro facere hic laborum animi.
      </p>
    </div>
    <Button text="Claim" />
  </div>
</div>
      </div>
    </div>
  );
};

export default Card;