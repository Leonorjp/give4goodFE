import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Card from "./AnnouncementView/Card.js";
import Login from "./Account/Login/Login.js";

function App() {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? announcements.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === announcements.length - 1 ? 0 : prevIndex + 1));
  };

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
  );
}

export default App;
