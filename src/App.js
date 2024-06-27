import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Importa o arquivo de estilos do aplicativo
import Announcement from './AnnouncementList/Announcement';
import CreateAd from './AnnouncementCreat/Edit/CreateAd.js';
import EditAd from './AnnouncementCreat/Edit/EditAd.js';

function App() {
  const [bodyClass, setBodyClass] = useState('');

  useEffect(() => {
    // Função para atualizar a classe do body com base na rota
    const updateBodyClass = () => {
      const pathName = window.location.pathname;
      if (pathName === '/announcement') {
        setBodyClass('announcement-page');
      } else if (pathName === '/account') {
        setBodyClass('create-ad-page');
      } else {
        setBodyClass('default-page');
      }
    };

    // Atualiza a classe inicialmente
    updateBodyClass();

    // Adiciona um event listener para atualizar a classe sempre que a rota mudar
    window.addEventListener('popstate', updateBodyClass);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('popstate', updateBodyClass);
    };
  }, []);

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
        <main className={`main-content ${bodyClass}`}>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/about" element={<EditAd />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/account" element={<CreateAd />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
