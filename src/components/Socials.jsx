import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Socials = () => {
  return (
    <div className='fixed md:right-12 lg:right-16 right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 z-10' 
         >
      
      <a href="https://www.facebook.com/kierjoshuadu" target='_blank' rel="noopener noreferrer" data-aos="fade-left" data-aos-duration='1000'>
        <h1 className='text-2xl md:text-4xl text-white border border-[#173558] rounded-lg bg-[#173558] p-3 hover:scale-125 transition-transform duration-300 shadow-md'>
          <FaFacebookF />
        </h1>
      </a>

      <a href="https://www.instagram.com/kier_dew/" target='_blank' rel="noopener noreferrer" data-aos="fade-left" data-aos-duration='1250'>
        <h1 className='text-2xl md:text-4xl text-white border border-[#173558] rounded-lg bg-[#173558] p-3 hover:scale-125 transition-transform duration-300 shadow-md'>
          <FaInstagram />
        </h1>
      </a>

      <a href="mailto:kierjoshuadu1226@gmail.com" target='_blank' rel="noopener noreferrer" data-aos="fade-left" data-aos-duration='1500'>
        <h1 className='text-2xl md:text-4xl text-white border border-[#173558] rounded-lg bg-[#173558] p-3 hover:scale-125 transition-transform duration-300 shadow-md'>
          <SiGmail />
        </h1>
      </a>

    </div>
  )
}

export default Socials;
