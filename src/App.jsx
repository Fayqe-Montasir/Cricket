import { useState } from 'react'

import AllPlayers from './components/AllPlayers/AllPlayers'
import Header from './components/Header/Header'
import Headertwo from './components/HeaderTwo/Headertwo'
import CartContainer from './components/CartContainer/CartContainer'
import Footer from './components/Footer/Footer'

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  })

  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart"
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "about"
      })
    }
  }

  return (
    <>
    <div className='w-10/12 mx-auto'>

      <Header></Header>
      <Headertwo></Headertwo>
      <CartContainer isActive={isActive} handleIsActiveState={handleIsActiveState}></CartContainer>
      <AllPlayers></AllPlayers>
    </div>
      <Footer></Footer>
      
    </>
  )
}

export default App
