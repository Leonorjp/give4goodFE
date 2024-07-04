import React, { useState, useEffect } from "react";
import CustomButton from "./ButtonClaim";
import BackButton from "./ButtonBack";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card({ onClose }) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [announcementDetailsName, setAnnouncementName] = useState(null);
  const [announcementDetailsCategory, setAnnouncementCategory] = useState(null);
  const [announcementDetailsDescription, setAnnouncementDescription] =
    useState(null);
  const [announcementDetailsImage, setannouncementDetailsImage] =
    useState(null);
  const [error, setError] = useState(null);
  const announcementId = "668533b561655250f4b4502b";
  const userDoneeId = "6669a437863d7b2b3954d255";

  const handleClaim = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/announcements/${announcementId}/userDonee/${userDoneeId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      Swal.fire({
        title: "Success!",
        text: "This product has been claimed with success!",
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
      });
    } catch (error) {
      console.error("There was an error!", error);
      setError(error.message);
      Swal.fire({
        title: "Error!",
        text: "There was a problem while claiming this product.",
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

  useEffect(() => {
    const updateBodyClass = () => {
      const pathName = window.location.pathname;

      if (pathName === "/announcementDetails") {
        const announcementId = "668533b561655250f4b4502b";
        fetch(`http://localhost:8080/announcements/${announcementId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            setAnnouncementName(data.product.name);
            setAnnouncementCategory(data.product.category);
            setAnnouncementDescription(data.product.description);
            setannouncementDetailsImage(data.product.photoUrl);
          })
          .catch((error) => {
            setError(error.message);
          });
      }
    };

    updateBodyClass();
    window.addEventListener("popstate", updateBodyClass);

    return () => {
      window.removeEventListener("popstate", updateBodyClass);
    };
  }, []);

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <div className="card-image">
              <img src={announcementDetailsImage} alt="Announcement" />
            </div>
          </div>
          <div className="card-text">
            <div className="text-and-button">
              <div className="text-container">
                <h1 className="card-title">{announcementDetailsName}</h1>
                <h2 className="card-category">{announcementDetailsCategory}</h2>
                <p className="card-description">
                  {announcementDetailsDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-navigation-Buttons">
          <div className="backArrow">
            <BackButton text="back" />
          </div>

          <div className="card-navigation">
            <CustomButton handleExploreClick={handleClaim} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
