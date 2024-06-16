import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons as needed
import "../css/Contact.css"


const Contact: React.FC = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Feel free to reach out with any questions or to schedule an appointment.</p>

            {/* Contact Information */}
            <div className="row">
                <div className="contact">
                    <div>
                        <FontAwesomeIcon icon={faHome} />
                        <h5>Gharse Towers, opposite Don Bosco School, Panaji, Goa</h5>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        <h5>+91 7057551122</h5>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <h5>test@gmail.com</h5>
                    </div>
                </div>
            </div>

            {/* Map ( using iframe, replace with your actual map component) */}
            <div>
                <h1>Our Location</h1>
                <iframe title="Samphire" width="90%" height="350px" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=617&amp;height=400&amp;hl=en&amp;q=Samphire Salon And Spa&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

            </div>
        </div>
    );
}

export default Contact;
