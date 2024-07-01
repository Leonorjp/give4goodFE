import React from 'react';
import './Login.css';
import childrenImage from '../../images/children.jpg';
import ButtonLogin from './ButtonLogin.js';

function Login() {
  return (
    <div className="container">
      <div className="login-form">
        <h1>Login</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <ButtonLogin text="Login" />
        </form>
        <div className="signUp-text">
        <p>
          Don't have an account? <a href="/signup">Sign up here!</a>
        </p>
        </div>
      </div>
      <div className="image-section">
        <img src={childrenImage} alt="Children smiling and showing peace signs" />
      </div>
    </div>
  );
}

export default Login;
