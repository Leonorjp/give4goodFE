import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EditAd.css';

const EditAd = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPhotoUrl, setProductPhotoUrl] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetchAnnouncementDetails();
  }, []);

  const fetchAnnouncementDetails = async () => {
    try {
      const response = await fetch('http://localhost:8080/announcements/66867a75c7924927253d2322');
      const data = await response.json();
      setProductName(data.product.name);
      setProductDescription(data.product.description);
      setProductPhotoUrl(data.product.photoUrl);
      setProductCategory(data.product.category);
      if (data.product.photoUrl) {
        setImagePreview(data.product.photoUrl);
      }
    } catch (error) {
      console.error('Error fetching announcement details:', error);
      toast.error('Error fetching announcement details.');
    }
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setProductPhotoUrl(url);
    setImagePreview(url);
  };

  const handleUpdate = async () => {
    const updatedData = {
      productName: productName,
      productDescription: productDescription,
      productPhotoUrl: productPhotoUrl,
      productCategory: productCategory,
    };

    try {
      const response = await fetch('http://localhost:8080/announcements/66867a75c7924927253d2322', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        toast.success('Announcement updated successfully!');
        navigate('/'); // Redirect to home page
      } else {
        const errorData = await response.json();
        toast.error(`Error updating announcement: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error updating announcement:', error);
      toast.error('Error updating announcement. Please try again later.');
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch('http://localhost:8080/announcements/66867a75c7924927253d2322', {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Announcement deleted successfully!');
        navigate('/'); // Redirect to home page
      } else {
        const errorData = await response.json();
        toast.error(`Error deleting announcement: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error deleting announcement:', error);
      toast.error('Error deleting announcement. Please try again later.');
    }
  };

  return (
    <main>
      <ToastContainer />
      <div className="create-ad-container">
        <div className="create-ad-content">
          <div className="image-preview-container">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="image-preview" />
            ) : (
              <div className="image-placeholder">Image Preview</div>
            )}
          </div>

          <div className="input-container">
            <input
              type="text"
              className="text-input"
              placeholder="Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <input
              className="text-input-description-input"
              placeholder="Description"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
            <input
              className="text-input-category"
              placeholder="Category"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            />
          </div>
          <div className="Edit-button-container">
            <button className="Edit-button" onClick={handleUpdate}>Update</button>
          </div>
          <div className="Delete-button-container">
            <button className="Delete-button" onClick={handleDelete}>Delete</button>
          </div>
          <div className='url-container'>
            <input
              type="text"
              className="url-input"
              placeholder="Image URL"
              value={productPhotoUrl}
              onChange={handleImageUrlChange}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditAd;
