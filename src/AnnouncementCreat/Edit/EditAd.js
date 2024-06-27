import React, { useState } from 'react';
import './EditAd.css';

const EditAd = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main>
      <div className="create-ad-container">
        <div className="create-ad-content">
          <div className="image-preview-container">
            <input
              type="file"
              className="file-input"
              onChange={handleImageChange}
            />
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="image-preview" />
            ) : (
              <div className="image-placeholder">Choose an image</div>
            )}
          </div>
          <div className="input-container">
            <input type="text" className="text-input" placeholder="Name" />
            <input className="text-input-description-input" placeholder="Description"/>
            <select className="text-input-category">
              <option>Select Category</option>
            </select>
          </div>
          <div className="Edit-button-container">
            <button className="Edit-button">Edit</button>
          </div>
          <div className="Delete-button-container">
            <button className="Delete-button">Delete</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditAd;
