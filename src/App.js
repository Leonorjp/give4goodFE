import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Importa o arquivo de estilos do aplicativo
import Card from './AnnouncementView/Card.js';
import Login from './Account/Login/Login.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <div className="logo">Give4Good</div>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">Announcements Details</Link></li>
              <li className="active"><Link to="/announcement" className="nav-link">Login</Link></li>
              <li><Link to="/account" className="nav-link">Home</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/about" element={<Card />} />
            <Route path="/announcement" element={<Login/>} />
            <Route path="/account" element={<h1>Home Page</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;