import React from 'react'
import './CartContainer.css'
import Available from '../Available/Available'
import Selected from '../Selected/Selected'
export default function CartContainer({handleIsActiveState, isActive, handleSelectedPlayer, selectedPlayer, handleRemove}) {
    
  return (
    <div>
       <div className='flex justify-end mt-16 sticky top-28  z-40 '>
            <div onClick={()=>handleIsActiveState("cart")} className={`${isActive.cart? "btn active":"btn" }`} >Available</div>
            <div onClick={()=>handleIsActiveState("selected")} className={`${isActive.cart? "btn ":"active btn"}`}>Selected ({selectedPlayer.length})</div>
        </div>

    {
        isActive.cart?<Available handleSelectedPlayer={handleSelectedPlayer}></Available>:<Selected handleRemove={handleRemove} selectedPlayer={selectedPlayer} ></Selected>
    }
    </div>
  )
}
