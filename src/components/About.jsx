import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div>
                        <p>Hi. I'm Andrew, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am passionate about improving the lives of those around me. I specialize in 
                        doing so through Full Stack Web Development. I want the people to love you, and your fans 
                        to create #hashtags in your honor. What would you do if you had a Software Engineer 
                        at your fingertips?
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About