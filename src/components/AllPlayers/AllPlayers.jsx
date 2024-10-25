import React, { useEffect, useState } from 'react'
import Player from '../Player/Player'

export default function AllPlayers() {
    const [allPlayers, setAllPlayers] =useState([])

    useEffect(()=>{
    fetch('./player.json')
    .then(res => res.json())
    .then(data =>setAllPlayers(data))
    }, [])
  return (
    <div className='grid grid-cols-3 gap-5'>
        {
            allPlayers.map(player=> <Player player={player}></Player>)
        }
    </div>
  )
}

