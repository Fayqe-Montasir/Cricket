import React from 'react'
import './CartContainer.css'
import Available from '../Available/Available'
import Selected from '../Selected/Selected'
export default function CartContainer({handleIsActiveState, isActive}) {
    
  return (
    <div>
       <div className='flex justify-end mt-16 '>
            <div onClick={()=>handleIsActiveState("cart")} className={`${isActive.cart? "btns active":"btns" }`} >Available</div>
            <div onClick={()=>handleIsActiveState("selected")} className={`${isActive.cart? "btns ":"active btns"}`}>Selected (0)</div>
        </div>

    {
        isActive.cart?<Available></Available>:<Selected></Selected>
    }
    </div>
  )
}
