import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// Styled Components
const PageContainer = styled.div`
  background-color: #c51d23;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 30px;
  padding: 80px;
  width: 100%;
  max-width: 1500px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  border: 40px solid rgba(255, 255, 255, 0.2);
  animation: ${slideIn} 0.5s ease-out;
`;

const Title = styled.h2`
  color: #c51d23;
  margin-bottom: 40px;
  font-size: 42px;
  text-align: center;
  font-weight: bold;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #333;
  font-size: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 18px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #c51d23;
    box-shadow: 0 0 0 3px rgba(197, 29, 35, 0.1);
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #c51d23;
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  grid-column: 1 / span 2;
  justify-self: end;
  transition: all 0.3s ease;
  margin-top: 20px;
  
  &:hover {
    background-color: #a51920;
    transform: translateY(-2px);
  }
`;

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

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          dateOfBirth: formData.dateOfBirth,
          contact: {
            address: formData.address,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
          }
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        window.alert('Account created successfully!');
        navigate('/login'); // Redireciona para a página de login após o sucesso
      } else {
        console.error('Error:', response.statusText);
        window.alert('Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('Failed to create account. Please try again.');
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <Title>Sign Up</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup style={{ gridColumn: '1 / span 2' }}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <Button type="submit">Create Account</Button>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default SignUp;
