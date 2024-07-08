import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AnnouncementCard.css';

function AnnouncementCard({ announcement }) {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate(`/announcementDetails/${announcement.id}`);
  };

  return (
    <div className="announcement-card">
      <img 
        src={announcement.product.photoUrl} 
        alt="Imagem do anúncio" 
        className="announcement-image" 
      />
      <h2 className="announcement-title">{announcement.product.name}</h2>
      <p className="announcement-category">{announcement.product.category}</p>
      <button className="more-button" onClick={handleMoreClick}>More</button>
    </div>
  );
}

export default AnnouncementCard;
