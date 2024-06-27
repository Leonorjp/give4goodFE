import React, { useState } from 'react';
import AnnouncementCard from './AnnouncementCard';
import './Announcement.css';

const announcements = [
  { id: 1, title: 'Cão peludo', category: 'Animal' },
  { id: 2, title: 'Cão brincalhão', category: 'Animal' },
  { id: 3, title: 'Cão amigável', category: 'Animal' },
  { id: 4, title: 'Cão obediente', category: 'Animal' },
  { id: 5, title: 'Cão inteligente', category: 'Animal' },
  { id: 6, title: 'Cão protetor', category: 'Animal' },
  { id: 7, title: 'Cão dócil', category: 'Animal' },
  { id: 8, title: 'Cão energético', category: 'Animal' },
  { id: 9, title: 'Cão carinhoso', category: 'Animal' },
  { id: 10, title: 'Cão alerta', category: 'Animal' },
  { id: 11, title: 'Cão atlético', category: 'Animal' },
  { id: 12, title: 'Cão companheiro', category: 'Animal' },
  { id: 13, title: 'Cão corajoso', category: 'Animal' },
  { id: 14, title: 'Cão curioso', category: 'Animal' },
  { id: 15, title: 'Cão devoto', category: 'Animal' },
  { id: 16, title: 'Cão fiel', category: 'Animal' },
  { id: 17, title: 'Cão leal', category: 'Animal' },
  { id: 18, title: 'Cão amoroso', category: 'Animal' },
  { id: 19, title: 'Cão bravo', category: 'Animal' },
  { id: 20, title: 'Cão elegante', category: 'Animal' },
  { id: 21, title: 'Cão gracioso', category: 'Animal' },
  { id: 22, title: 'Cão robusto', category: 'Animal' },
  { id: 23, title: 'Cão gentil', category: 'Animal' },
  { id: 24, title: 'Cão saltitante', category: 'Animal' },
  { id: 25, title: 'Cão amável', category: 'Animal' },
  { id: 26, title: 'Cão ágil', category: 'Animal' },
  { id: 27, title: 'Cão afetuoso', category: 'Animal' },
];

function Announcements() {
  const [currentPage, setCurrentPage] = useState(1); // Iniciando em 1 para facilitar o cálculo das páginas
  const announcementsPerPage = 9; // Quantidade de anúncios por página

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastAnnouncement >= announcements.length;

  return (
    <div>
      <div className="announcements">
        {currentAnnouncements.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="navigation-button left-arrow" onClick={handlePrev} style={{ visibility: isFirstPage ? 'hidden' : 'visible' }}>
          &lt;
        </button>
        <button className="navigation-button right-arrow" onClick={handleNext} style={{ visibility: isLastPage ? 'hidden' : 'visible' }}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Announcements;