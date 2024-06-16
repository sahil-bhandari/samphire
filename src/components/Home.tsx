import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../css/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images, replace these with actual images
import image1 from '../assets/image1.png';
import image2 from '../assets/image.jpg';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.jpg';
import mobile1 from '../assets/mobile4.jpg';
import mobile2 from '../assets/mobile2.jpg';
import mobile3 from '../assets/mobile3.jpg';
import mobile4 from '../assets/mobile1.jpg';

const Home: React.FC = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
    };

    const [images, setImages] = useState({
        imageA: image1,
        imageB: image2,
        imageC: image3,
        imageD: image4,
    });

    const updateImages = () => {
        if (window.innerWidth <= 600) {
            setImages({
                imageA: mobile1,
                imageB: mobile2,
                imageC: mobile3,
                imageD: mobile4,
            });
        } else {
            setImages({
                imageA: image1,
                imageB: image2,
                imageC: image3,
                imageD: image4,
            });
        }
    };

    useEffect(() => {
        updateImages();
        window.addEventListener("resize", updateImages);
        return () => window.removeEventListener("resize", updateImages);
    }, []);

    return (
        <div className="home-container">
            <Slider {...sliderSettings} className="image-slider">
                <div><img src={images.imageA} alt="Highlight 1" /></div>
                <div><img src={images.imageB} alt="Highlight 2" /></div>
                <div><img src={images.imageC} alt="Highlight 3" /></div>
                <div><img src={images.imageD} alt="Highlight 4" /></div>
            </Slider>

            <section className="intro-section">
                <h1>Welcome to Samphire Salon & Spa</h1>
                <p>Your ultimate destination for relaxation and rejuvenation. Discover our wide range of beauty and wellness services tailored just for you.</p>
            </section>

            <section className="testimonials-section">
                <h2>What Our Clients Say</h2>
                <p>"Absolutely love this place! The services are top-notch and the staff is incredibly friendly." - Sagar</p>
                <p>"A haven of peace and tranquility. Highly recommend their spa treatments." - Reema</p>
            </section>
        </div>
    );
}

export default Home;
