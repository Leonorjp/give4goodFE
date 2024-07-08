// src/components/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledAppBar = styled(AppBar)`
  background-color: #ff0000 !important;
  padding: 10px 0;
`;

const BrandTypography = styled(motion.div)`
  font-family: 'Cambria', Cochin, Georgia, 'Times New Roman', serif;
  font-weight: 700;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  text-decoration: none;
`;

const HeaderLink = styled(Button)`
  text-transform: none !important;
  color: white !important;
  font-weight: ${props => props.active ? 'bold' : 'normal'} !important;
  font-size: 1.1rem !important;
  margin: 0 10px !important;
  transition: transform 0.3s ease !important;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    background-color: rgba(255, 0, 0, 0.9);
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`;

const StyledMenuItem = styled(MenuItem)`
  color: white !important;
  font-weight: bold !important;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2) !important;
    transform: scale(1.05);
  }
`;

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
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <BrandTypography
          component={motion.div}
          onClick={handleLogoClick}
          whileHover={{ scale: 1.05 }}
          transition={{
            type: "spring",
            stiffness: 300,
            duration: 0.3
          }}
        >
          Give4Good
        </BrandTypography>
        <div>
          <HeaderLink
            component={Link}
            to="/"
            active={location.pathname === '/'}
          >
            {capitalizeFirstLetter('home')}
          </HeaderLink>
          <HeaderLink
            component={Link}
            to="/about-us"
            active={location.pathname === '/about-us'}
          >
            {capitalizeFirstLetter('about us')}
          </HeaderLink>
          <HeaderLink
            aria-controls="announcements-menu"
            aria-haspopup="true"
            onClick={handleClick}
            endIcon={<ArrowDropDownIcon />}
            active={location.pathname === '/announcements' || location.pathname === '/my-announcements'}
          >
            {capitalizeFirstLetter('announcements')}
          </HeaderLink>
          <StyledMenu
            id="announcements-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem component={Link} to="/announcements" onClick={handleClose}>
              {capitalizeFirstLetter('all announcements')}
            </StyledMenuItem>
            <StyledMenuItem component={Link} to="/my-announcements" onClick={handleClose}>
              {capitalizeFirstLetter('my announcements')}
            </StyledMenuItem>
          </StyledMenu>
          <HeaderLink
            component={Link}
            to="/account"
            active={location.pathname === '/account'}
          >
            {capitalizeFirstLetter('account')}
          </HeaderLink>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
