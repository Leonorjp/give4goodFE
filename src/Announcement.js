import React from 'react';
import './Announcement.css';

function Announcement({ announcement }) {
  return (
    <div className="announcement">
      <img src={announcement.photo} alt={announcement.name} />
      <div className="announcement-info">
        <h2>{announcement.name}</h2>
        <h4>{announcement.category}</h4>
        <p>{announcement.description}</p>
      </div>
    </div>
  );
}

export default Announcement;
