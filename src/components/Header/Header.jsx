import React from 'react'

export default function Header() {
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <img src="https://i.ibb.co.com/L5Bws0m/logo.png" alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-3 text-gray-700">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
    <div className='border'>
    <h2 className='font-semibold p-3'>0 Coin</h2>

    </div>
  </div>
</div>
    </div>
  )
}
