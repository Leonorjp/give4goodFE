import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button'; 

const CustomButton = ({ handleExploreClick }) => {
  return (
    <Button
      variant="contained"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      onClick={handleExploreClick}
      style={{
        backgroundColor: '#C01722',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px',
        border: 'none',
        padding: '8px 30px',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '12%',
      }}
    >
      Claim
    </Button>
  );
};

export default CustomButton;