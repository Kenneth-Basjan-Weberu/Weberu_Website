import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';
import webDev from '../assets/website-development.jpg';

const slidesData = [
  {
    imageUrl: webDev,
    title: 'Website Development',
    description: 'This is the description for slide 1.',
    buttonLabel: 'Learn More',
    id: 1,
  },
  {
    imageUrl: webDev,
    title: 'Graphics Design',
    description: 'This is the description for slide 2.',
    buttonLabel: 'Learn More',
    id: 2,
  },
  {
    imageUrl: webDev,
    title: 'Marketing',
    description: 'This is the description for slide 3.',
    buttonLabel: 'Learn More',
    id: 3,
  },
  // Add more slides as needed
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Speed of the slide transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Time between slides
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const progressBarWidth = `${(1 / slidesData.length) * 100}%`;

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slidesData.map((slide, id) => (
          <div key={id} className="slider-item" style={{ backgroundImage: `url("${slide.imageUrl}")` }}>
            <div className="slider-content">
              <img src={slide.imageUrl}/>
              <h4>{slide.title}</h4>
              <p>{slide.description}</p>
              <button>{slide.buttonLabel}</button>
            </div>
          </div>
        ))}
      </Slider>

      <div className="progress-bar-container">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`progress-bar ${index === currentSlide ? 'active' : ''}`}
            style={{ width: progressBarWidth }}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
