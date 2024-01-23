import React from 'react'
import '../index.css'
import HeroSlider from './HeroSlider';
import { SlGlobe } from "react-icons/sl";

const Hero = () => {
  return (
    <div>
      {/* Hero Text */}
      <div className="uppercase">
          <h1 className='text-9xl text-center font-bold'>The future of digital growth</h1>
          <p className='text-2xl text-center'>Building your dream business seamlessly with tech</p>
      </div>
      {/* Slider */}
      <div>
          <HeroSlider/>
      </div>
      {/* Card */}
      <div className="uppercase flex space-x-5 justify-center">
        <h1>We listen</h1>
        <SlGlobe />
        <h1>We build</h1>
        <SlGlobe />
        <h1>We are weberu.</h1>
      </div>
    </div>
  );
}

export default Hero