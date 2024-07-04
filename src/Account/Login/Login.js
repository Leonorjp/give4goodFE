import React, { useState, useEffect } from "react";
import "./Login.css";
import childrenImage from "../../images/children.jpg";
import ButtonLogin from "./ButtonLogin.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate("/account");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/users/email/${userEmail}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseJson = await response.json();
      sessionStorage.setItem("userEmail", responseJson.contact.email);
      sessionStorage.setItem("userName", responseJson.name);
      sessionStorage.setItem("userId", responseJson.id);

      Swal.fire({
        title: "Logged in successfully!",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "confirm-button",
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/account");
        }
        return responseJson
      });

    } catch (error) {
      console.error("There was an error!", error);
      setError(error.message);
      Swal.fire({
        title: "Error logging in!",
        text: "There was a problem logging in! Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "confirm-button",
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
    }
    
  };

  return (
    <div className="container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <ButtonLogin text="Login" />
        </form>

        <div className="signUp-text">
          <p>
            Don't have an account?{" "}
            <a href="/signup" onClick={handleSignUpClick}>
              Sign up here!
            </a>
          </p>
        </div>
      </div>
      <div className="image-section">
        <img
          src={childrenImage}
          alt="Children smiling and showing peace signs"
        />
      </div>
    </div>
  );
}

export default Login;
