import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#41c69e] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - drewgomez209@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='name' />
            <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name="message" rows="10"></textarea>
            <button className='text-white border-2 hover:bg-[#41c69e] hover:border-[#41c69e] px-4 py-3 my-8 mx-auto flex items-center rounded'>Let's join forces</button>
        </form>
    </div>
  )
}

export default Contact