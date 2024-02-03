import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';
import webDev from '../assets/website-development.jpg';
import video from '../assets/video-editing.jpg'
import v1 from '../assets/v1.jpg'
import dreads from '../assets/color-stock-images/dreads-color.png'
import { LuArrowUpRight } from "react-icons/lu";

const slidesData = [
  {
    imageUrl: webDev,
    title: 'Website Development',
    description: 'This is the description for slide 1.',
    buttonLabel: 'Learn More',
    index: 1,
  },
  {
    imageUrl: v1,
    title: 'Video Editing',
    description: 'This is the description for slide 2.',
    buttonLabel: 'Learn More',
    index: 2,
  },
  {
    imageUrl: dreads,
    title: 'Marketing',
    description: 'This is the description for slide 3.',
    buttonLabel: 'Learn More',
    index: 3,
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

  // const progressBarWidth = `${(1 / slidesData.length) * 100}%`;

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slider-item">
            <div className="slider-content h-full rounded-[5%] items-start uppercase flex flex-col justify-end pl-10" style={{ backgroundImage: `url("${slide.imageUrl}")`, objectFit: 'contain' }}>
              <h4 className='font-bold text-5xl'>{slide.title}</h4>
              <p>{slide.description}</p>
              <button className='text-black font-bold px-10 mt-5 mb-20 hover:border-[#ffa500] hover:cursor-pointer flex flex-row items-center hover:text-[#ffa500]'>{slide.buttonLabel}<LuArrowUpRight className='ml-1 text-lg'/></button>
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className="progress-bar-container">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`progress-bar ${index === currentSlide ? 'active' : ''}`}
            style={{ width: progressBarWidth }}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default HeroSlider;
