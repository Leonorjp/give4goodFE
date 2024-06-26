import React, { useState } from 'react';
import './App.css';
import Announcement from './Announcement';

const announcements = [
  {
    photo: 'https://via.placeholder.com/150',
    name: 'Announcement 1',
    category: 'Category 1',
    description: 'Description of Announcement 1',
  },
  {
    photo: 'https://via.placeholder.com/150',
    name: 'Announcement 2',
    category: 'Category 2',
    description: 'Description of Announcement 2',
  },
  {
    photo: 'https://via.placeholder.com/150',
    name: 'Announcement 3',
    category: 'Category 3',
    description: 'Description of Announcement 3',
  },
];

function App() {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? announcements.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === announcements.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Announcement announcement={announcements[index]} />
        <div className="navigation">
          <button onClick={handlePrevious}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </header>
    </div>
  );
}

export default App;
