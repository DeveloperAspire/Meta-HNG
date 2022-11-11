import React from 'react'

function MetaBNB() {
  return (
    <section className='flex items-center justify-between px-24 metabnb py-12'>
        <div className='basis-1/2 flex flex-col gap-12'>
        <h3 className='text-5xl text-white'>Metabnb NFTs</h3>
        <p className='text-lg w-10/12 text-white'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
        <a href="" className='rounded bg-white text-[#A02279] py-4 px-10 inline-block w-fit'>Learn more</a>
        </div>

        <div className='basis-1/2'><img src="img/metabnb.svg" alt="" /></div>
    </section>
  )
}

export default MetaBNB