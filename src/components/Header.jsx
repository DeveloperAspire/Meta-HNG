import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import Modal from './Modal';

function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <header className='flex justify-between items-center px-24 py-12'>
          <div><img src="img/logo.svg" alt="" /></div>
          <nav className='flex gap-12'>
              <NavLink to={'/'}  id='locations'>Home</NavLink>
              <NavLink to={'/locations'}  id='locations'>Place to stay</NavLink>
              <NavLink to={''}>NFTs</NavLink>
              <NavLink to={''}>Community</NavLink>
          </nav>
          <button className='rounded text-white header-button py-2 px-4' id='connect-wallet'
          onClick={() => {
            setOpenModal(true)}}>Connect wallet</button>
      </header>      
      {openModal && <Modal closeUpModal={setOpenModal} />}
    </>
  )
}

export default Header