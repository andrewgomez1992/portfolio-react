import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#d6d6d6] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/407b4886-1beb-4682-84ad-41ddf78303a0" className='flex flex-col max-w[600px] w-100'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-[#ccbcd8] text-gray-800'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - drewgomez209@gmail.com</p>
            </div>
            <input className='bg-[#eae8e8] p-2 rounded' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#eae8e8] rounded' type="email" placeholder='Email' name='name' />
            <textarea className='bg-[#eae8e8] p-2 rounded' placeholder='Message' name="message" rows="10"></textarea>
            <button className='text-gray-800 border-2 border-[#ccbcd8] hover:bg-[#ccbcd8] hover:border-[#ccbcd8] px-4 py-3 my-8 mx-auto flex items-center rounded'>Let's join forces</button>
        </form>
    </div>
  )
}

export default Contact