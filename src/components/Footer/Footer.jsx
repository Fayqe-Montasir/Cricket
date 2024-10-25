import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black'>
      <div className='w-10/12 mx-auto text-white '>
      <img src="https://i.ibb.co.com/tZrxyY8/logo-footer.png" alt="" />
      <div className='md:flex justify-between'>

      <div>
      <h2 className='text-xl font-semibold'>About Us</h2>
      <p className='w-64 text-gray-400'>We are a passionate team dedicated to providing the best services to our customers.</p>
      </div>

      <div>
      <h2 className='text-xl font-semibold'>Quick Links</h2>
      <ul className='text-gray-400  list-disc'>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>

      <div>
      <h2 className='text-xl font-semibold'>Subscribe</h2>
      <p className='w-64 text-gray-400'>Subscribe to our newsletter for the latest updates.</p>
      <div>
        <input className='p-3 rounded-xl' type="text" name="" id="" placeholder='Enter your email' />
        <button className='btn'>Subscribe</button>
      </div>
      </div>
      </div>

      </div>
      <hr className='text-gray-600 mt-6' />
      <p className='text-gray-400 text-center my-4'>@2024 Your Company All Rights Reserved.</p> 
    </div>
  )
}
