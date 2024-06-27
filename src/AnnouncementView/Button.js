import React from 'react';
import './Button.css';

const Button = ({ text }) => {
  return (
    <button className="card-button">{text}</button>
  );
};

export default Button;

