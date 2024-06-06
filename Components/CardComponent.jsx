import React from 'react';
import "../LandingPage/LandingPage.css";

const CardComponent = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="icon-container">
        <img src={icon} alt="icon" className="card-icon" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default CardComponent;
