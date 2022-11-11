import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between items-center px-24 py-12'>
        <div><img src="img/logo.svg" alt="" /></div>
        <nav className='flex gap-12'>
            <NavLink to={'/'}  id='locations'>Home</NavLink>
            <NavLink to={'/locations'}  id='locations'>Place to stay</NavLink>
            <a href="#">NFTs</a>
            <a href="#">Community</a>
        </nav>
        <button className='rounded text-white header-button py-2 px-4'>Connect wallet</button>

    </header>
  )
}

export default Header