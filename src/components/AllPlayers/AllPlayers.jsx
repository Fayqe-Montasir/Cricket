import React, { useEffect, useState } from 'react'
import Player from '../Player/Player'

export default function AllPlayers({handleSelectedPlayer}) {
    const [allPlayers, setAllPlayers] =useState([])

    useEffect(()=>{
    fetch('./player.json')
    .then(res => res.json())
    .then(data =>setAllPlayers(data))
    }, [])
  return (
   <div>
    <h2 className='text-3xl font-bold mb-3'>Available Players</h2>
    <div className='md:grid grid-cols-3 gap-5 mb-5'>
        {
            allPlayers.map(player=> <Player  handleSelectedPlayer={handleSelectedPlayer} player={player}></Player>)
        }
    </div>
    </div>
  )
}

