// src/components/HeroSection.js
import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/background2.jpg') no-repeat center center/cover;
  text-align: center;
  color: white;
  padding: 20px;
`;

const HeroButton = styled(Button)`
  margin-top: 200px; /* Further increased margin to move the button lower */
  padding: 25px 60px;
  border-radius: 30px;
  background-color: #d32f2f !important;
  color: #fff !important;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: lowercase;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
    background-color: #b71c1c !important;
  }
`;

const RotatingWords = styled(motion.span)`
  color: red;
  font-weight: bold;
  display: inline-block;
  margin-left: 5px;
`;

const DonationText = styled(motion.div)`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 3px;
`;

const HeroSection = () => {
  const words = ["better and safer.", "solidarity and connected.", "welcoming and generous.", "healthy and happy."];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => {
        const currentIndex = words.indexOf(prev);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [words]);

  const handleExploreClick = () => {
    navigate('/about-us');
  };

  return (
    <HeroContainer>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h2" component="span">
          For a world   
          <RotatingWords key={currentWord} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {currentWord}
          </RotatingWords>
        </Typography>
      </motion.div>
      <DonationText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        Donation platform
      </DonationText>
      <HeroButton variant="contained" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} onClick={handleExploreClick}>
        Explore
      </HeroButton>
    </HeroContainer>
  );
};

export default HeroSection;
