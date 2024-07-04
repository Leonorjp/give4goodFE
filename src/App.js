import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import MyAnnouncements from './components/MyAnnouncements';
import SignUp from './components/SignUp';
import React from "react";
import "./App.css";
import Card from "./AnnouncementView/Card.js";
import Login from "./Account/Login/Login.js";

function App() {
  return (    
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-announcements" element={<MyAnnouncements />} />
        <Route path="/announcementDetails" element={<Card />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/announcementLogin" element={<Login />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </>
  );
}

export default App;
