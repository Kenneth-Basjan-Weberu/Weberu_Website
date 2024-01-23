import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    // Desktop Navigation
    <div className='flex justify-between my-6'>
      {/* Left Section */}
      <div className="">
        <ul className='uppercase flex justify-between space-x-32 '>
          <li><Link className='text-white hover:text-[#ffa500] font-bold text-2xl hover:cursor-pointer'>about</Link></li>
          <li><Link className='text-white hover:text-[#ffa500] font-bold text-2xl hover:cursor-pointer'>work</Link></li>
        </ul>
      </div>
      {/* Middle Section */}
      <div className="logo">
          <ul>
            <li><Link className='font-bold text-2xl uppercase text-white hover:cursor-pointer'>Weberu<span className='text-[#ffa500]'>.</span></Link></li>
          </ul>
      </div>
      {/* Right Section */}
      <div className="">
        <ul className='uppercase flex justify-between space-x-32'>
          <li><Link className='text-white hover:text-[#ffa500] font-bold text-2xl hover:cursor-pointer'>services</Link></li>
          <li><Link className='text-white hover:text-[#ffa500] font-bold text-2xl hover:cursor-pointer'>contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar