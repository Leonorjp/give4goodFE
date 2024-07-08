import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/SignUp.css';

// SignUp Component
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const formattedDateOfBirth = formData.dateOfBirth;
    const formattedPhoneNumber = parseInt(formData.phoneNumber, 10);

    // Log the formatted phone number to verify the conversion
    console.log('Formatted Phone Number:', formattedPhoneNumber);

    if (new Date(formattedDateOfBirth) >= new Date()) {
      toast.error('Date of Birth must be in the past');
      return;
    }

    if (!/^\d{9}$/.test(formData.phoneNumber)) {
      toast.error('Phone number must be exactly 9 digits');
      return;
    }

    if (isNaN(formattedPhoneNumber)) {
      toast.error('Phone number must be a valid integer');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          dateBirth: formattedDateOfBirth,
          contact: {
            address: formData.address,
            phoneNumber: formattedPhoneNumber,  // Ensure it's an integer
            email: formData.email,
          }
        }),
      });

      const data = await response.text();
      console.log('Response:', response);

      if (response.ok) {
        console.log('Success:', data);
        toast.success('Account created successfully!');
        setTimeout(() => navigate('/announcementLogin'), 2000); // Delay navigation to ensure toast is visible
      } else if (response.status === 409) {
        console.error('Error:', response.statusText, data);
        toast.error('Email already in use. Please use a different email.');
      } else {
        console.error('Error:', response.statusText, data);
        toast.error(`Failed to create account: ${data}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2 className="title">Sign Up</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="label" htmlFor="name">Name</label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="address">Address</label>
            <input
              className="input"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="dateOfBirth">Date of Birth</label>
            <input
              className="input"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="phoneNumber">Phone Number</label>
            <input
              className="input"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group" style={{ gridColumn: '1 / span 2' }}>
            <label className="label" htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button className="button" type="submit">Create Account</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
