import React from 'react';
import './AnnouncementView.css';

function Announcement({ announcement }) {
  return (
    <div className="announcement">
      <img src={announcement.photo} />
      <div className="announcement-info">
        <h2>{announcement.name}</h2>
        <h4>{announcement.category}</h4>
        <p>{announcement.description}</p>
      </div>
    </div>
  );
}

export default Announcement;
