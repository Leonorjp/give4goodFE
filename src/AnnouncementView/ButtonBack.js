import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <span
    className="left-arrow" onClick={() => navigate('/account')}>
      &lt; back
      </span>
  );
};

export default BackButton;