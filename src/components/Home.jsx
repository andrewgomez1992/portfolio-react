import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#d6d6d6]'>

        {/** Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#b8a2c9]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-800'>Andrew Gomez</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#ccbcd8]'>I'm a Full Stack Developer.</h2>
            <p className='text-gray-800 py-4 max-w-[700px]'>I am passionate about improving the lives of those around me. I specialize in 
                        doing so through Full Stack Web Development. I want the people to love you, and your fans 
                        to create #hashtags in your honor. What would you do if you had a Software Engineer 
                        at your fingertips?</p>
            <div>
                <button className='text-gray-500 group border-2 rounded px-6 py-3 my-2 flex items-center border-[#ccbcd8] hover:bg-[#ccbcd8] hover:border-[#ccbcd8]'>View Projects
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home