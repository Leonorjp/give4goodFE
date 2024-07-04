import React, { useState, useEffect } from 'react';
import AnnouncementCard from './AnnouncementCard';
import './Announcement.css';

function Announcements() {
  const [currentPage, setCurrentPage] = useState(1);
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false);
  const announcementsPerPage = 9;
  
  const URL = `http://localhost:8080/announcements/not-owned-by/${sessionStorage.getItem("userId")}`;

  useEffect(() => {
    try {
      const response = fetch(URL);
      const data = response.json();
      setAnnouncements(data); 
      setFetched(true); // Atualize o estado para indicar que os anúncios foram buscados
    } catch (error) {
      setError(error.message);
    }
  })

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
