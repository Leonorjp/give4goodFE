import React from "react";
import { motion } from "framer-motion";
import "./ButtonLogin.css";

function ButtonLogin({ handleExploreClick }) {
  return (
    <motion.button
      className="login-button"
      variant="contained"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleExploreClick}
    >
      Login
    </motion.button>
  );
}

export default ButtonLogin;