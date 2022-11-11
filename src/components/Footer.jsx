import React from 'react'

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
                <a href='#' className='text-[#F1F3F9] text-sm'>NFT</a>
                <a href='#' className='text-[#F1F3F9] text-sm'>Tokens</a>
                <a href='#' className='text-[#F1F3F9] text-sm'>Landlords</a>
                <a href='#' className='text-[#F1F3F9] text-sm'>Discord</a>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-white text-[18px] font-bold mb-2'>Places</h3>
                <a href='#' className='text-[#F1F3F9] text-sm'>Castle</a>
                <a href='#' className='text-[#F1F3F9] text-sm'>Farms</a>
                <a href='#' className='text-[#F1F3F9] text-sm'>Beach</a>
                <a href='#' className='text-[#F1F3F9] text-sm'>Learn more</a>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-white text-[18px] font-bold mb-2'>About us</h3>
                <a href='#' className='text-[#F1F3F9] text-sm'>Road map</a>
                <a href='#' className='text-[#F1F3F9] text-sm'>Creators</a>
                <a href='#' className='text-[#F1F3F9] text-sm'>Career</a>
                <a href='#' className='text-[#F1F3F9] text-sm'>Contact us</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer