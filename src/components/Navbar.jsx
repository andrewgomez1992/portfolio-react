import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Logo.png';

const Navbar = ({ menuOpen, setMenuOpen }) => {

    const linkedInURL = 'https://www.linkedin.com/in/andrewgomez1992'
    const instagramURL = 'https://www.instagram.com/_drewgomez_/'
    const githubURL = 'https://github.com/andrewgomez1992'
    const resumeURL = 'https://docs.google.com/document/d/1SaiNKo1XMetDAVxoI-2XGdLZ8rt305D3rzMARIqyCLU/edit?usp=sharing'

    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#d6d6d6] text-gray-800'>
        <div className='relative pt-6 px-2 right-32'>
            <img src={Logo} alt="Logo Image" style ={{width: '300px'}}/>
        </div>

        {/** Menu */}

        <div className={"menu " + (menuOpen && "active")}>
            <ul className='hidden md:flex'>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>

        {/** Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 text-gray-800 h-[30px]'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>


        {/** Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#d6d6d6] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>


        {/** Social Icons */}


        <div className='hidden lg:flex fixed flex-col flex-end top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded'>
                    <a onClick={() => window.open(linkedInURL, '_blank')} className='flex justify-between items center w-full text-gray-300' href="/">
                        Linkedin <FaLinkedin  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded'>
                    <a onClick={() => window.open(githubURL, '_blank')} className='flex justify-between items center w-full text-gray-300'>
                        Github <FaGithub  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] rounded'>
                    <a className='flex justify-between items center w-full text-gray-300' href="mailto:drewgomez209@gmail.com">
                        Email <HiOutlineMail  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded'>
                    <a onClick={() => window.open(resumeURL, '_blank')} className='flex justify-between items center w-full text-gray-300' href="/">
                        Resume <BsFillPersonLinesFill  size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar