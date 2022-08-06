import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className='relative right-20'>
            <img src={Logo} alt="Logo Image" style ={{width: '200px'}}/>
        </div>
    </div>
  )
}

export default Navbar