import React from 'react';
import '../css/OperatingHours.css';

const OperatingHours = () => {
  return (
    <section className="operating-hours">
      {/* <h2>Operating Hours</h2> */}
      <div className="hours-list">
        <div className="hours-box">
          <p>Monday - Friday</p>
          <p>10:00 AM - 10:00 PM</p>
        </div>
        <div className="hours-box">
          <p>Saturday & Sunday</p>
          <p>9:30 AM - 10:00 PM</p>
        </div>
        <div className="hours-box">
          <p>Public Holidays</p>
          <p>Time may differ. Please contact us.</p>
        </div>
      </div>
    </section>
  );
};

export default OperatingHours;
