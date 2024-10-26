import React from 'react'

export default function Headertwo({handleAdd}) {
  return (
    <div className='rounded-3xl' >
        <div className="hero  rounded-3xl bg-black "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/cyyxh7Q/bg-shadow.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center ">
    <div className="py-14 ">
        <img className='text-center' src="https://i.ibb.co.com/RNV9g2n/banner-main.png" alt="" />
      <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5">
      Beyond Boundaries Beyond Limits
      </p>
      <button onClick={handleAdd} className="btn btn-primary">Claim Free Credit</button>
    </div>
  </div>
</div>
    </div>
   
  )
}
