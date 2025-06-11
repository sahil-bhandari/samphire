import React, { useState, useEffect, useRef, useCallback } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhone,
    faEnvelope,
    faArrowUp,
    faStar,
    faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
import '../css/Theme.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.jpg';
import mobile1 from '../assets/mobile4.jpg';
import mobile2 from '../assets/mobile2.jpg';
import mobile3 from '../assets/mobile3.jpg';
import mobile4 from '../assets/mobile1.jpg';
import imageHair from '../assets/samphirehair.jpg';
import imageNail from '../assets/samphirenail.jpg';
import imageSpa from '../assets/samphirespa.jpg';

interface Service {
    image: string;
    title: string;
    description: string;
    features: string[];
}

interface Testimonial {
    name: string;
    review: string;
    rating: number;
    service: string;
}

const Home: React.FC = () => {
    const [images, setImages] = useState<string[]>([image1, image2, image3, image4]);
    const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const servicesData: Service[] = [
        {
            image: imageHair,
            title: 'Hair Care',
            description: 'Expert haircuts, styling, and coloring to give you a fresh look.',
            features: ['Professional Cuts', 'Color Treatments', 'Hair Styling', 'Hair Treatments']
        },
        {
            image: imageSpa,
            title: 'Spa Treatments',
            description: 'Relaxing massages, facials, and body treatments for your wellness.',
            features: ['Deep Tissue Massage', 'Facial Treatments', 'Body Wraps', 'Aromatherapy']
        },
        {
            image: imageNail,
            title: 'Nail Services',
            description: 'Manicures and pedicures to keep your nails healthy and beautiful.',
            features: ['Manicures', 'Pedicures', 'Nail Art', 'Gel Polish']
        },
    ];

    const testimonials: Testimonial[] = [
        {
            name: "Sagar",
            review: "Absolutely love this place! The services are top-notch and the staff is incredibly friendly.",
            rating: 5,
            service: "Hair Care"
        },
        {
            name: "Reema",
            review: "A haven of peace and tranquility. Highly recommend their spa treatments.",
            rating: 5,
            service: "Spa Treatment"
        },
        {
            name: "Tanish",
            review: "Amazing nail services! The attention to detail is incredible.",
            rating: 5,
            service: "Nail Services"
        }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
        pauseOnHover: true,
        responsive: [{ breakpoint: 768, settings: { autoplaySpeed: 3000 } }]
    };

    const updateImages = useCallback(() => {
        const isMobile = window.innerWidth <= 600;
        setImages(isMobile ? [mobile1, mobile2, mobile3, mobile4] : [image1, image2, image3, image4]);
    }, []);

    const handleScroll = useCallback(() => {
        const scrollTop = window.pageYOffset;
        setShowScrollTop(scrollTop > 400);

        const sections = [
            { id: 'hero', ref: heroRef },
            { id: 'about', ref: aboutRef },
            { id: 'services', ref: servicesRef },
            { id: 'contact', ref: contactRef }
        ];

        for (const section of sections) {
            const element = section.ref.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    setActiveSection(section.id);
                    break;
                }
            }
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = [aboutRef.current, servicesRef.current, contactRef.current];
        elements.forEach(el => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        updateImages();
        window.addEventListener('resize', updateImages);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('resize', updateImages);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [updateImages, handleScroll]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div ref={heroRef} id="hero" className="hero-section">
                <Slider {...sliderSettings} className="image-slider">
                    {images.map((image, index) => (
                        <div key={index} className="slide-item">
                            <img src={image} alt={`Salon showcase ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} />
                            <div className="slide-overlay">
                                <div className="slide-content">
                                    <h1 className="hero-title">
                                        Welcome to <br /> Samphire Salon &amp; Spa
                                    </h1>
                                    <p className="hero-subtitle">Your ultimate destination for relaxation and rejuvenation</p>
                                    <div className="hero-buttons">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => scrollToSection('contact')}
                                            aria-label="Book appointment"
                                        >
                                            Book Now
                                        </button>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => scrollToSection('services')}
                                            aria-label="View services"
                                        >
                                            Our Services
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Navigation Pills */}
            {/* <nav className="section-nav" aria-label="Page sections">
                {[
                    { id: 'about', label: 'About' },
                    { id: 'services', label: 'Services' },
                    { id: 'contact', label: 'Contact' }
                ].map(({ id, label }) => (
                    <button
                        key={id}
                        className={`nav-pill ${activeSection === id ? 'active' : ''}`}
                        onClick={() => scrollToSection(id)}
                        aria-label={`Go to ${label} section`}
                    >
                        {label}
                    </button>
                ))}
            </nav> */}

            {/* Services Section */}
            <section
                ref={servicesRef}
                id="services"
                className={`services-section section ${isVisible.services ? 'animate-in' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Premium Services</h2>
                        <p className="section-subtitle">Discover our wide range of beauty and wellness services tailored just for you</p>
                        <div className="section-divider"></div>
                    </div>

                    <div className="services-grid">
                        {servicesData.map((service, index) => (
                            <article
                                key={index}
                                className="service-card"
                                style={{ animationDelay: `${200 * index}ms` }}
                            >
                                <div className="service-image-container">
                                    <img src={service.image} alt={service.title} className="service-image" />
                                    <div className="service-overlay">
                                        <div className="service-content">
                                            <h3 className="service-title">{service.title}</h3>
                                            <p className="service-description">{service.description}</p>
                                            <ul className="service-features">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                            <button className="service-btn" aria-label={`Learn more about ${service.title}`}>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="testimonials-section section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="testimonial-header">
                                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                                    <div className="rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className="star" />
                                        ))}
                                    </div>
                                </div>
                                <p className="testimonial-text">"{testimonial.review}"</p>
                                <div className="testimonial-footer">
                                    <strong className="client-name">{testimonial.name}</strong>
                                    <span className="service-type">{testimonial.service}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                ref={aboutRef}
                id="about"
                className={`about-section section ${isVisible.about ? 'animate-in' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">About Samphire Salon & Spa</h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="about-grid">
                        <div className="about-content">
                            <div className="about-card">
                                <h3>Our Journey</h3>
                                <p>
                                    Our story began in 2023, fueled by a passion for beauty and wellness.
                                    From humble beginnings, we have grown into a renowned establishment known for our exceptional services and
                                    commitment to customer satisfaction.
                                </p>
                            </div>

                            <div className="about-card">
                                <h3>Our Team</h3>
                                <p>
                                    Our team of experienced professionals is dedicated to providing personalized care and
                                    attention to each client. We continuously update our skills and stay abreast of the latest trends and techniques
                                    to ensure that you receive the best possible service.
                                </p>
                            </div>

                            <div className="about-card">
                                <h3>Our Philosophy</h3>
                                <p>
                                    At Samphire Salon & Spa, we believe in using only the highest quality products and
                                    providing services that are tailored to meet the unique needs of each individual. We are committed to creating a
                                    relaxing and enjoyable experience for all our clients.
                                </p>
                            </div>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number">2+</div>
                                <div className="stat-label">Years of Excellence</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Happy Clients</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">15+</div>
                                <div className="stat-label">Services</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section
                ref={contactRef}
                id="contact"
                className={`contact-section section ${isVisible.contact ? 'animate-in' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="section-subtitle">Feel free to reach out with any questions or to schedule an appointment</p>
                        <div className="section-divider"></div>
                    </div>

                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <div className="contact-details">
                                    <h3>Visit Us</h3>
                                    <p>Gharse Towers, opposite Don Bosco School, Panaji, Goa</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className="contact-details">
                                    <h3>Call Us</h3>
                                    <a href="tel:+917057551122" className="contact-link">+91 7057551122</a>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className="contact-details">
                                    <h3>Email Us</h3>
                                    <a href="mailto:samphirespa@gmail.com" className="contact-link">samphirespa@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="hours-section">
                            <h3 className="hours-title">Operating Hours</h3>
                            <div className="hours-grid">
                                <div className="hours-card">
                                    <div className="hours-day">Monday - Friday</div>
                                    <div className="hours-time">10:00 AM - 10:00 PM</div>
                                </div>
                                <div className="hours-card">
                                    <div className="hours-day">Saturday & Sunday</div>
                                    <div className="hours-time">9:30 AM - 10:00 PM</div>
                                </div>
                                <div className="hours-card">
                                    <div className="hours-day">Public Holidays</div>
                                    <div className="hours-time">Time may differ. Please contact us.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="map-container">
                        <iframe
                            title="Samphire Salon Location"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: 'var(--border-radius-lg)' }}
                            loading="lazy"
                            allowFullScreen={false}
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://maps.google.com/maps?width=617&amp;height=400&amp;hl=en&amp;q=Samphire Salon And Spa&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        />
                    </div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            <button
                className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
};

export default Home;