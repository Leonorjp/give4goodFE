import React from 'react';
import { motion } from 'framer-motion';

function ButtonLogin ({ handleExploreClick }) {
  return (
    <motion.button
    component={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    onClick={handleExploreClick}
      style={{
        width: '80%',
        padding: '10px',
        backgroundColor: '#C01722',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxSizing: 'border-box'
      }}
    >
      Login
    </motion.button>
  );
}

export default ButtonLogin;