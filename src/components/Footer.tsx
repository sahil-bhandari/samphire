import React from 'react';
import '../css/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Samphire Salon and Spa. All rights reserved.</p>
                <p>Contact us on <a href="mailto:samphirespa@gmail.com">this email</a></p>
            </div>
        </footer>
    );
}

export default Footer;
