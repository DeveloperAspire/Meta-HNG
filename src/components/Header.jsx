import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import Modal from './Modal';

function Header() {
  const [openModal, setOpenModal] = useState(false);

  const [mobileMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className='flex justify-between items-center px-12 sm:px-24 py-12 flex-wrap'>
          <div className='w-[70%] min-[896px]:w-[20%]'><img src="img/logo.svg" alt="" className='w-full'/></div>
          <nav className='w-[20%] min-[896px]:w-[70%] flex max-[896px]:justify-end min-[896px]:justify-between'>
              <div className='flex items-center justify-between gap-4 max-[895px]:hidden w-full' id="menu">
                <NavLink to={'/'}  id='locations'>Home</NavLink>
                <NavLink to={'/locations'}  id='locations'>Place to stay</NavLink>
                <NavLink to={''}>NFTs</NavLink>
                <NavLink to={''}>Community</NavLink>
                <button className='rounded text-white header-button py-2 px-4 whitespace-nowrap' id='connect-wallet'
                          onClick={() => {
                            setOpenModal(true)}}>Connect wallet</button>
              </div>
              <svg className="w-6 z-20 relative min-[896px]:hidden" id="toggle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
          </nav>
          
      </header>      
      {openModal && <Modal closeUpModal={setOpenModal} />}
    </>
  )
}

export default Header