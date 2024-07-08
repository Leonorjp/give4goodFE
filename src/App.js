import { Route, Routes } from 'react-router-dom';
import './App.css';
import Announcement from './AnnouncementList/Announcement';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import MyAnnouncements from './components/MyAnnouncements';
import SignUp from './components/SignUp';
import React from "react";
import "./App.css";
import Card from "./AnnouncementView/Card.js";
import Login from "./Account/Login/Login.js";
import CreateAd from "./AnnouncementCreat/Edit/CreateAd.js";
import EditAd from "./AnnouncementCreat/Edit/EditAd.js";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-announcements" element={<MyAnnouncements />} />
        <Route path="/announcements" element={<Announcement />} />
        <Route path="/announcementDetails/:id" element={<Card />} /> {/* Adicione a rota para Card */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/announcementLogin" element={<Login />} />
        <Route path="/CreateAd" element={<CreateAd />} />
        <Route path="/edit-announcement/:id" element={<EditAd />} /> 
      </Routes>
    </>
  );
}

export default App;
