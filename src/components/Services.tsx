import React from 'react';
import "../css/Services.css";
import imageHair from '../assets/samphirehair.jpg';
import imageNail from '../assets/samphirenail.jpg';
import imageSpa from '../assets/samphirespa.jpg';

const Services: React.FC = () => {
  return (
    <div>
      <section className="services-section">
        <h1>Our Services</h1>
        <div className="service-cards">
          <div className="service-card">
            <img src={imageHair} alt="Hair Care" />
            <h3>Hair Care</h3>
            <p>Expert haircuts, styling, and coloring to give you a fresh look.</p>
          </div>
          <div className="service-card">
            <img src={imageSpa} alt="Spa Treatments" />
            <h3>Spa Treatments</h3>
            <p>Relaxing massages, facials, and body treatments for your wellness.</p>
          </div>
          <div className="service-card">
            <img src={imageNail} alt="Nail Services" />
            <h3>Nail Services</h3>
            <p>Manicures and pedicures to keep your nails healthy and beautiful.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
