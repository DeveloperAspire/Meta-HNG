import React from 'react'
import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <footer className=''>
        <div className="footer-wrapper flex justify-between gap-5 px-24 py-12 bg-[#1D1D1E]">
            <div className='flex flex-col gap-12'>
                <div className='mb-12'><img src="img/logo-white.svg" alt="" /></div>
                <div className='flex gap-12'>
                    <img src="img/facebook.svg" alt="Facebook" />
                    <img src="img/instagram.svg" alt="Instagram" />
                    <img src="img/twitter.svg" alt="Twitter" />
                </div>
                <p className='text-left text-[#F7F7F7]'>© 2022 Metabnb</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-white text-[18px] font-bold mb-2'>Community</h3>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>NFT</NavLink>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>Tokens</NavLink>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>Landlords</NavLink>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>Discord</NavLink>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-white text-[18px] font-bold mb-2'>Places</h3>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>Castle</NavLink>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>Farms</NavLink>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>Beach</NavLink>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>Learn more</NavLink>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-white text-[18px] font-bold mb-2'>About us</h3>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>Road map</NavLink>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>Creators</NavLink>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>Career</NavLink>
                <NavLink to={''} className='text-[#F1F3F9] text-sm'>Contact us</NavLink>
            </div>
        </div>
    </footer>
  )
}

export default Footer