import React from 'react'

export default function Selected({selectedPlayer, handleRemove}) {
 
  return (
    <div>
       <h2 className='text-3xl font-bold mb-3'>Selected Players {selectedPlayer.length}/6</h2>
        <div>
        {
          selectedPlayer.map(pl=>(
            <div className='flex justify-between border items-center my-4 p-3 shadow-lg'>
              <div className='flex gap-2'>
              <img className='w-14 bg-center  rounded-full ' src={pl.image} alt="" />
              <div>
              <h2 className='text-xl font-bold'>{pl.name}</h2>
              <div className='flex gap-3'>
              <h5>{pl.role}</h5>
              <p>${pl.biddingPrice}</p>
              </div>
              </div>
              </div>
              
              <i onClick={()=> handleRemove(pl.playerId)} class="fa-solid fa-trash"></i>
            </div>
          ))
        }
        </div>
      <button className='btn bg-yellow-400 mb-5'> <a href="#main"> Add More Player </a> </button>
    </div>
  )
}
