import React from 'react'

export default function Player({player, handleSelectedPlayer}) {
 
    const {name, image, country, role, battingType, bowlingType, biddingPrice} =player
    
  return (
    <div  className="card bg-base-100 border p-4">
  <figure >
    <img className='w-80 h-60 rounded-2xl'
      src={image}
      alt="" />
  </figure>
  <div className="card-body">

    <div className='flex items-center gap-4' >
    <i class="fa-solid fa-user"></i>
    <h2 className="card-title">{name}</h2>
    </div>

    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
      <i class="fa-solid fa-flag"></i>
      <p className='text-gray-600'>{country}</p>
      </div>
      <h3 className='bg-gray-200 py-1 px-2 rounded-lg'>{role}</h3>
    </div>
    <hr />
    <h3 className='font-bold text-xl'>Rating</h3>
    <div className='flex'>
    <p>{battingType}</p>
    <p className='text-end'>{bowlingType}</p>
    </div>

    <div className="card-actions items-center">
    <p className='font-semibold'>Price: ${biddingPrice}</p>
      <button onClick={()=>handleSelectedPlayer(player)} className="btn hover:bg-yellow-300">Choose Player</button>
    </div>
  </div>
</div>

  )
}
