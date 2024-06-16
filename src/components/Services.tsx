import React from 'react';
import "../css/Services.css"

const Services: React.FC = () => {
  return (
    <div>
      <section className="services-section">
        <h1>Our Services</h1>
        <div className="service-cards">
          <div className="service-card">
            <h3>Hair Care</h3>
            <p>Expert haircuts, styling, and coloring to give you a fresh look.</p>
          </div>
          <div className="service-card">
            <h3>Spa Treatments</h3>
            <p>Relaxing massages, facials, and body treatments for your wellness.</p>
          </div>
          <div className="service-card">
            <h3>Nail Services</h3>
            <p>Manicures and pedicures to keep your nails healthy and beautiful.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
