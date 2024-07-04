import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import Announcement from './AnnouncementList/Announcement';
import CreateAd from './AnnouncementCreat/Edit/CreateAd';
import EditAd from './AnnouncementCreat/Edit/EditAd';

const URL = 'http://localhost:8080/announcements/not-owned-by/666880ca4b50b9431017136a';

function App() {
  const [bodyClass, setBodyClass] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setAnnouncements(data); 
      setFetched(true); // Atualize o estado para indicar que os anúncios foram buscados
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <div className="logo">Give4Good</div>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About us</Link></li>
              <li className="active"><Link to="/announcement" className="nav-link">Announcement</Link></li>
              <li><Link to="/account" className="nav-link">Account</Link></li>
            </ul>
          </nav>
        </header>
        <MainContent 
          bodyClass={bodyClass} 
          setBodyClass={setBodyClass} 
          announcements={announcements} 
          error={error} 
          fetchAnnouncements={fetchAnnouncements}
          fetched={fetched}
        />
      </div>
    </Router>
  );
}

const MainContent = ({ bodyClass, setBodyClass, announcements, error, fetchAnnouncements, fetched }) => {
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    if (pathName === '/announcement' && !fetched) {
      fetchAnnouncements(); // Apenas buscar se ainda não foi buscado
    }

    if (pathName === '/announcement') {
      setBodyClass('announcement-page');
    } else if (pathName === '/account') {
      setBodyClass('create-ad-page');
    } else {
      setBodyClass('default-page');
    }
  }, [location.pathname, setBodyClass, fetchAnnouncements, fetched]);

  return (
    <main className={`main-content ${bodyClass}`}>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<EditAd />} />
        <Route path="/announcement" element={<Announcement announcements={announcements} error={error} />} />
        <Route path="/account" element={<CreateAd />} />
      </Routes>
    </main>
  );
}

export default App;
