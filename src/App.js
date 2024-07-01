import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import MyAnnouncements from './components/MyAnnouncements';
import SignUp from './components/SignUp';

function App() {
  return (
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
