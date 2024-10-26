import React from 'react'
import './HeaderTwo.css'
export default function Headertwo({handleAdd}) {
  return (
    <div>
    <div
      className="hero rounded-3xl bg-black"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/cyyxh7Q/bg-shadow.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="py-14">
          <img
            className="mx-auto"
            src="https://i.ibb.co.com/RNV9g2n/banner-main.png"
            alt=""
          />
          <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="mb-5">Beyond Boundaries Beyond Limits</p>
          <div className=''>

          <button onClick={handleAdd} className="btn font-bold bg-yellow-400">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
   
  )
}
