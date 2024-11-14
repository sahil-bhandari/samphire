import React from 'react';
import "../css/Contact.css"
import OperatingHours from './OperatingHours';
import InfoSection from './InfoSection';


const Contact: React.FC = () => {
    return (
        <div className='contacts'>
            <h1>Contact Us</h1>
            <p>Feel free to reach out with any questions or to schedule an appointment.</p>

            {/* Contact Information */}
            <InfoSection />

            {/* Timings */}
            <OperatingHours />

            {/* Map ( using iframe, replace with your actual map component) */}
            <div>
                <iframe title="Samphire" width="100%" height="320px" style={{ border: 0 }} loading="lazy" allowFullScreen={false} referrerPolicy="no-referrer-when-downgrade" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=617&amp;height=400&amp;hl=en&amp;q=Samphire Salon And Spa&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>

    );
}

export default Contact;
