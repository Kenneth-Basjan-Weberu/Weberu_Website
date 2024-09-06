import React from 'react'
import billiard from '../assets/clients/billiard-man.png'
import tbm_favicon from '../assets/favicon/billiard-man-logo.png'
import { WiStars } from "react-icons/wi";
import { LuCode2 } from "react-icons/lu";
import Button1 from './Button1'
import { Link } from 'react-scroll'

const Work = () => {
  return (
    <div
        name='work'
        data-aos="zoom-in"
        data-aos-duration="1000"
        >
        
        <div className='flex items-center space-x-1 text-2xl'>
          <LuCode2 className='text-[#ffa500] font-bold'/><div className="uppercase">selected projects</div>
        </div>

        {/* Past Work Cards */}
        {/* Card 1 */}
        <div data-aos="fade-up" data-aos-duration="1500" className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-20 lg:px-2">
          <div className="border-[1px] border-[#808080] relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#ffffff" />
                  <stop offset={1} stopColor="#ffffff" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md md:mx-0 md:flex-auto md:py-16 text-left">
              <div className='bg-[#40584b] mb-5 rounded-[10px] w-14 h-14 items-center flex justify-center shadow-inner shadow-[#96bea9]'>
                  <img 
                    src= {tbm_favicon} 
                    alt="The Billiard Man Favicon" 
                    width={50}
                    height={50}
                  />
              </div>
              <h2 className="text-[30px] font-bold text-white sm:text-4xl text-left">
                The Billiard Man
              </h2>
              <h className='text-[20px] font-bold text-white sm:text-2xl text-left'>
              Pool Table Service Providers Near New York, NY
              </h>
              <p className="mt-6 text-lg leading-8 text-gray-100 ">
                As the dedicated web developer for The Billiard Man, I designed and developed a captivating online 
                platform that showcases their expertise as premier pool table service providers near New York, NY.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                
                <a href="https://thebilliardman.com" className="text-lg font-normal leading-6 text-white mb-14 md:mb-0 hover:text-[#ffa500]" target="_blank" rel="noopener noreferrer">
                  Go To Website <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[60rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src= {billiard}
                alt="The Billiard Man Home Screen"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          data-aos="fade-up" data-aos-duration="1500"
          className='mx-auto max-w-6xl py-24 sm:px-6 sm:py-20 lg:px-8'>
          <div className='bg-[#181818] shadow-lg shadow-black rounded-3xl border-dashed border-[1px] border-[#808080]'>
            <div className='flex flex-col items-center mt-28 mb-28 justify-center'>
              <WiStars className='text-[70px]'/>
              <h3 className='uppercase text-center font-bold text-xl md:text-[40px] mt-10'>Your project goes here</h3>
              <p className='text-lg md:text-[20px] font-light mt-2'>Let's turn your idea into reality</p>
              <div className='mt-20 uppercase'>
              <Link to='contact' smooth={true} duration={1400} className='hover:text-white cursor-pointer'><Button1>Get in touch</Button1></Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Work