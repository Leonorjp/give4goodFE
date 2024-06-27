import React from 'react';
import './AnnouncementCard.css';
import dogImage from './Image/dog.png'; // Certifique-se de adicionar uma imagem de cachorro na pasta public/images

function AnnouncementCard({ announcement }) {
  return (
    <div className="announcement-card">
      <img src={dogImage} alt="Cão peludo" />
      <h2 className="announcement-title">{announcement.title}</h2>
      <p className="announcement-category">{announcement.category}</p>
      <button>More</button>
    </div>
  );
}

export default AnnouncementCard;
