import React from 'react'

function Hero() {
  return (
    <header className='flex items-center justify-between gap-20 px-24 py-12 mb-24'>
        <div className='flex flex-col gap-5 basis-7/12'>
        <h1 className='text-[56px] text-[#434343] w-11/12 basis-1/2 hero-head'>Rent a <span className='text-[#A02279] font-bold'>Place</span> away from <span className='text-[#A02279] font-bold'>Home</span> in the <span className='text-[#A02279] font-bold'>Metaverse</span></h1>
        <p className=' w-11/12 text-2xl text-[#434343]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <form action="" className='w-full hero'>
            <div className="submit-div flex">
            <input type="text" name="" id="" placeholder='Search for location' className='py-4 pl-3 text-[
            #B8B8B8] basis-2/3'/>
            <input type="submit" value="Search" className='text-white py-4 px-24 basis-1/3'/>
            </div>
        </form>
        </div>
        <div className='basis-5/12'>
        <img src="img/hero-img.svg" alt="" className='object-contain'/>
        </div>
    </header>
  )
}

export default Hero