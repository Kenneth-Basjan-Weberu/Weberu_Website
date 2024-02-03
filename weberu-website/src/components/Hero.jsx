import React from 'react'
import '../index.css'
import HeroSlider from './HeroSlider';
import { SlGlobe } from "react-icons/sl";
import heroimg from '../assets/branded-images/Dreads.jpg'

const Hero = () => {
  return (
    <div>
      {/* Hero Text */}
      <div className="uppercase">
          <h1 className='text-9xl text-center font-bold'>The future of digital growth</h1>
          <p className='text-3xl text-center'>Building your dream business seamlessly with tech</p>
      </div>
      {/* Slider
      <div className='my-8'>
          <HeroSlider/>
      </div> */}
      {/* Hero Image */}
      <div className="">
        <img 
          src={heroimg} 
          alt="Weberu" 
          className='my-8 rounded-[5%]'
          />
      </div>
      {/* Card */}
      <div className="uppercase flex space-x-5 justify-center bg-[#57575759] items-center p-10 font-bold text-5xl rounded-full">
        <h1>We listen</h1>
        <SlGlobe className='text-[#ffa500]'/>
        <h1>We build</h1>
        <SlGlobe className='text-[#ffa500]'/>
        <h1>We are weberu<span className='text-[#ffa500]'>.</span></h1>
      </div>
      {/* Info */}
      <div className="text-center text-6xl my-5">
  <p className=''>
    We are a team of experienced digital creators who are passionate about creating beautiful and functional digital services that are tailored to your needs and budget.
  </p>
</div>

    </div>
  );
}

export default Hero