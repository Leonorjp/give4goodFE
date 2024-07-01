import React from 'react';


function AnnouncementCard({ title, category }) {
  return (
    <div className="announcement-card">
      <h2 className="card-title">{title}</h2>
      <p className="card-category">{category}</p>
      <button className="edit-button">Edit</button>
    </div>
  );
}

export default AnnouncementCard;
