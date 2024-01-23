import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css'; // Import your custom styles

const slidesData = [
  {
    imageUrl: './assets/website-development.jpg',
    title: 'Website Development',
    description: 'This is the description for slide 1.',
    buttonLabel: 'Learn More',
  },
  {
    imageUrl: 'url-to-your-image-1.jpg',
    title: 'Graphics Design',
    description: 'This is the description for slide 2.',
    buttonLabel: 'Learn More',
  },
  {
    imageUrl: 'url-to-your-image-1.jpg',
    title: 'Marketing',
    description: 'This is the description for slide 3.',
    buttonLabel: 'Learn More',
  },
  // Add more slides as needed
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Change this to control the speed of the slide transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Change this to control the time between slides
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
        {slidesData.map((slide, index) => (
          <div key={index} className="slider-item" style={{ backgroundImage: `url(${slide.imageUrl})` }}>
            <div className="slider-content">
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
