import React from 'react'
import DREW from '../assets/drew.jpg'

const About = () => {
  return (
    <div href='#about' name='about' className='w-full h-screen bg-[#d6d6d6] text-gray-800'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ccbcd8]'>About</p>
                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi. I'm Andrew, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I would consider myself a very thoughtful and creative individual. 
        Supported with emotional intelligence. I have a very clear understanding 
        of the needs of those around me. I am very curious, if I had 100 lifetimes 
        I would have no problem staying busy and learning new things in each and every one of them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About