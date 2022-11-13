import React from 'react'
import {NavLink} from 'react-router-dom'

function MetaBNB() {
  return (
    <section className='flex items-center justify-between flex-col text-center lg:gap-0 lg:text-left lg:flex-row px-12 sm:px-24 metabnb py-12'>
        <div className='basis-1/2 flex flex-col gap-12'>
          <h3 className='text-5xl text-white'>Metabnb NFTs</h3>
          <p className='text-lg lg:w-10/12 text-white'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
          <NavLink to={''} className='text-center mx-auto rounded bg-white text-[#A02279] py-4 px-10 inline-block w-fit lg:text-left lg:mx-0 lg:my-0'>Learn more</NavLink>
        </div>

        <div className='basis-1/2 hidden lg:block'><img src="img/metabnb.png" alt="" className='w-full'/></div>
    </section>
  )
}

export default MetaBNB