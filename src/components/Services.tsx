import React from 'react';
import "../css/Services.css";
import imageHair from '../assets/samphirehair.jpg';
import imageNail from '../assets/samphirenail.jpg';
import imageSpa from '../assets/samphirespa.jpg';

const Services: React.FC = () => {
  const servicesData = [
    {
      image: imageHair,
      title: 'Hair Care',
      description: 'Expert haircuts, styling, and coloring to give you a fresh look.',
    },
    {
      image: imageSpa,
      title: 'Spa Treatments',
      description: 'Relaxing massages, facials, and body treatments for your wellness.',
    },
    {
      image: imageNail,
      title: 'Nail Services',
      description: 'Manicures and pedicures to keep your nails healthy and beautiful.',
    },
  ];

  return (
    <div className='services'>
      <h1>Our Services</h1>
      <section className="services-section">
        <div className="services-container">
          {servicesData.map((service, index) => (
            <div className="service-card animated fadeInUp" key={index} style={{ animationDelay: `${200 * index}ms` }}>
              <div className="uc_long_content_box_holder">
                <div className="uc_long_content_box_box">
                  <div className="uc_image_box" style={{ backgroundImage: `url(${service.image})` }}></div>
                  <div className="uc_overlay"></div>
                  <div className="uc_box_content">
                    <div className="uc_title"></div>
                    <div className="uc_hidden_content">
                      <div className="uc_description">
                        <h3 style={{ color: '#fff' }}>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
