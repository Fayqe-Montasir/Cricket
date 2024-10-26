import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'
import Headertwo from './components/HeaderTwo/Headertwo'
import CartContainer from './components/CartContainer/CartContainer'
import Footer from './components/Footer/Footer'

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  })

  const [selectedPlayer, setSelectedPlayer] =useState([])

  const [price, setPrice] = useState(0)

  const handleBuy = (pl) =>{
      setPrice(price - pl)
    
  }
  const handleAddPrice =(id)=>{
    const player = selectedPlayer.find((p)=>p.playerId == id)
    setPrice(price + player.biddingPrice )
  }

  const handleAdd =(player) =>{ 
    setPrice(price + 8000000)
   
  }
  
  const handleRemove = (id) =>{
    handleAddPrice(id)
    const newRemove =selectedPlayer.filter(p=>p.playerId != id)
    setSelectedPlayer(newRemove)
  }

  const handleSelectedPlayer = (player) =>{
    const oneAdd =selectedPlayer.find((p) => p.playerId == player.playerId)
    if(oneAdd){
      toast("Player already selected")
    }
    else if( price > player.biddingPrice ) {
      toast(`Congrates!! ${player.name} is now in your squad`)
      handleBuy(player.biddingPrice)
      const newPlayer =[...selectedPlayer, player]
      setSelectedPlayer(newPlayer)

    }
    else{
      toast("Not enough money to buy this player.Claim some Credit")
    }
  }

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

      <Header price={price} ></Header>
      <Headertwo handleAdd ={handleAdd}></Headertwo>
      

    <CartContainer handleRemove={handleRemove} selectedPlayer={selectedPlayer} handleSelectedPlayer={handleSelectedPlayer} isActive={isActive} handleIsActiveState={handleIsActiveState}></CartContainer>
    <ToastContainer></ToastContainer>
    </div>
      <Footer></Footer>
      
    </>
  )
}

export default App
