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
      <div className='my-8'>
          <HeroSlider/>
      </div>
      {/* Card */}
      <div className="uppercase flex space-x-5 justify-center bg-[#57575759] items-center p-10 font-bold text-5xl rounded-full">
        <h1>We listen</h1>
        <SlGlobe className='text-[#ffa500]'/>
        <h1>We build</h1>
        <SlGlobe className='text-[#ffa500]'/>
        <h1>We are weberu<span className='text-[#ffa500]'>.</span></h1>
      </div>
    </div>
  );
}

export default Hero