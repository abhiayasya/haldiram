import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logopointer from '../assets/logopointer.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

const LogoSlider = () => {
  return (
    <div className='p-7'>
      <div className=' mb-6 font-serif'>
        <h3 className=' text-2xl md:text-[32px] font-normal uppercase my-3'>
          Haldiram is committed to the <br />
          <span className='text-[#B50020]'>HIGHEST STANDARDS</span> OF FOOD 
          <span className='text-[#B50020]'> SAFETY AND <br /> QUALITY</span> CONTROL
        </h3>
        <img src={logopointer} width={222} height={16} alt="" />
      </div>

      <div className='overflow-hidden relative w-full h-[150px] flex items-center'>
        <motion.div
          className='flex space-x-5'
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              className='border-r border-gray-500 my-3 w-[200px] h-[200px] object-cover'
              alt={`logo-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;
