import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/** Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#41c69e]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Andrew Gomez</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I would consider myself a very thoughtful and creative individual. 
        Supported with emotional intelligence. I have a very clear understanding 
        of the needs of those around me. I am very curious, if I had 100 lifetimes 
        I would have no problem staying busy and learning new things in each and every one of them.</p>
            <div>
                <button className='text-white group border-2 rounded px-6 py-3 my-2 flex items-center hover:bg-[#41c69e] hover:border-[#41c69e]'>View Projects
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