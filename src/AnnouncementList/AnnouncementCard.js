import React from 'react';
import './AnnouncementCard.css';

function AnnouncementCard({ announcement }) {
  return (
    <div className="announcement-card">
      <img src={process.env.PUBLIC_URL + announcement.product.photoUrl} alt="Imagem do anúncio" className="announcement-image" />
      <h2 className="announcement-title">{announcement.product.name}</h2>
      <p className="announcement-category">{announcement.product.category}</p>
      <button>More</button>
    </div>
  );
}

export default AnnouncementCard;
