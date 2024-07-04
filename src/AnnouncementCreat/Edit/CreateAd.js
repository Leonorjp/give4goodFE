import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './CreateAd.css';

const CreateAd = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();


  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/announcements/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Something went wrong while creating the ad');
      }

      toast.success('Ad created successfully!');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const showErrors = () => {
    if (errors.productName) toast.error(errors.productName.message);
    if (errors.productDescription) toast.error(errors.productDescription.message);
    if (errors.userDonorId) toast.error(errors.userDonorId.message);
    if (errors.productCategory) toast.error(errors.productCategory.message);
    if (errors.productPhotoUrl) toast.error(errors.productPhotoUrl.message);
  };

  // Função para atualizar a URL da imagem conforme o usuário digita
  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  return (
    <main>
      <ToastContainer />
      <div className="create-ad-container">
        <form className="create-ad-content" onSubmit={handleSubmit(onSubmit, showErrors)}>
          <div className="image-preview-container">
            {imageUrl ? (
              <img src={imageUrl} alt="Product Preview" className="image-preview" />
            ) : (
              <div className="image-placeholder">Enter Image URL</div>
            )}
          </div>

          <div className="input-container">
            <input
              {...register('productName', { required: 'Product name is required' })}
              type="text"
              className="text-input"
              placeholder="Name"
            />

            <input
              {...register('productDescription', { required: 'Product description is required' })}
              className="text-input-description-input"
              placeholder="Description"
            />

            <input
              {...register('userDonorId', { required: 'Donor ID is required' })}
              className="text-input-description-input"
              placeholder="Donor"
            />

            <select
              {...register('productCategory', { required: 'Product category is required' })}
              className="text-input-category"
            >
              <option value="">Select Category</option>
              <option value="Leisure">Leisure</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Sports">Sports</option>
              <option value="Technology">Technology</option>
              <option value="Tools">Tools</option>
            </select>
          </div>

          <div className='url-container'>
            <input
              {...register('productPhotoUrl', { required: 'Product photo URL is required' })}
              type="text"
              className="url-input"
              placeholder="Enter Image URL"
              onChange={handleImageUrlChange} // Atualiza a URL da imagem ao digitar
            />
          </div>

          <div className="create-button-container">
            <button className="create-button" type="submit">Create</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateAd;
