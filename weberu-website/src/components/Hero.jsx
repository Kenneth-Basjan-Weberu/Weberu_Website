import React from 'react'
import '../index.css'
import HeroSlider from './HeroSlider';

const Hero = () => {
  return (
    <div>
        <div className="uppercase">
            <h1 className='text-9xl text-center font-bold'>The future of digital growth</h1>
            <p className='text-2xl text-center'>Building your dream business seamlessly with tech</p>
        </div>
        <div>
            <HeroSlider/>
        </div>
    </div>
  );
}

export default Hero