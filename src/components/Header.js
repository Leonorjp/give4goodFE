import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../css/Header.css';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" className="styled-app-bar">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <motion.div
          className="brand-typography"
          onClick={handleLogoClick}
          whileHover={{ scale: 1.05 }}
          transition={{
            type: "spring",
            stiffness: 300,
            duration: 0.3
          }}
        >
          Give4Good
        </motion.div>
        <div>
          <Button
            component={Link}
            to="/"
            className={`header-link ${location.pathname === '/' ? 'header-link-active' : ''}`}
          >
            {capitalizeFirstLetter('home')}
          </Button>
          <Button
            component={Link}
            to="/about-us"
            className={`header-link ${location.pathname === '/about-us' ? 'header-link-active' : ''}`}
          >
            {capitalizeFirstLetter('about us')}
          </Button>
          <Button
            aria-controls="announcements-menu"
            aria-haspopup="true"
            onClick={handleClick}
            endIcon={<ArrowDropDownIcon />}
            className={`header-link ${(location.pathname === '/announcements' || location.pathname === '/my-announcements') ? 'header-link-active' : ''}`}
          >
            {capitalizeFirstLetter('announcements')}
          </Button>
          <Menu
            id="announcements-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="styled-menu"
          >
            <MenuItem component={Link} to="/announcements" onClick={handleClose} className="styled-menu-item">
              {capitalizeFirstLetter('all announcements')}
            </MenuItem>
            <MenuItem component={Link} to="/my-announcements" onClick={handleClose} className="styled-menu-item">
              {capitalizeFirstLetter('my announcements')}
            </MenuItem>
          </Menu>
          <Button
            component={Link}
            to="/sign-up"
            className={`header-link ${location.pathname === '/sign-up' ? 'header-link-active' : ''}`}
          >
            {capitalizeFirstLetter('account')}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
