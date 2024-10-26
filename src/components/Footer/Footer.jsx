import React from 'react'

export default function Footer() {
  return (
   
    <div>
        {/*  */}
        <div className='relative w-10/12 mx-auto -mb-32'>
        <div
  className=" bg-white bg-cover bg-center rounded-2xl border "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/cyyxh7Q/bg-shadow.png)",
  }}>
 
  <div className=" text-neutral-content text-center ">
    <div className="py-14 ">
      <h1 className="mb-5 text-3xl font-bold text-black">Subscribe to our Newsletter</h1>
      <p className="mb-5 text-gray-600">
      Get the latest updates and news right in your inbox!
      </p>
      <div className='space-x-3'>
      <input className='border p-3 rounded-lg md:pl-5' type="text" placeholder='Enter your email' />
      <button className="btn btn-primary">Claim Free Credit</button>

      </div>
    </div>
  </div>
</div>
    </div>


<div className='bg-black pt-40 '>
    <div>
      </div>
      <div className='w-10/12 mx-auto text-white '>
      
      <img className='mx-auto mb-2' src="https://i.ibb.co.com/tZrxyY8/logo-footer.png" alt="" />
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
    </div>
  )
}
