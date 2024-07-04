import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import MyAnnouncements from './components/MyAnnouncements';
import SignUp from './components/SignUp';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Card from "./AnnouncementView/Card.js";
import Login from "./Account/Login/Login.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <div className="logo">Give4Good</div>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/announcementDetails" className="nav-link">
                  Announcements Details
                </Link>
              </li>
              <li className="active">
                <Link to="/announcementLogin" className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/account" className="nav-link">
                  Account
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/announcementDetails" element={<Card />} />
            <Route path="/announcementLogin" element={<Login />} />
            <Route path="/account" element={<h1>Account Page</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-announcements" element={<MyAnnouncements />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </>
  );
}

export default App;
