import React from 'react'

function Hero() {
  return (
    <header className='flex items-center justify-between gap-12 px-12 sm:px-24 py-12 mb-24 flex-col xl:flex-row'>
        <div className='flex flex-col gap-5 w-full xl:w-3/5'>
          <h1 className='text-3xl sm:text-[56px] text-[#434343] hero-head'>Rent a <span className='text-[#A02279] font-bold'>Place</span> away from <span className='text-[#A02279] font-bold'>Home</span> in the <span className='text-[#A02279] font-bold'>Metaverse</span></h1>
          <p className=' w-11/12 sm:text-2xl text-[#434343]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          <form action="" className='w-full hero'>
              <div className="submit-div gap-4 sm:gap-0 flex flex-col sm:flex-row">
                <input type="text" name="" id="" placeholder='Search for location' className='py-4 pl-3 text-[
                #B8B8B8] basis-2/3'/>
                <input type="submit" value="Search" className='text-white py-4 px-24 basis-1/3 cursor-pointer'/>
              </div>
          </form>
        </div>
        <div className='hidden w-full xl:w-2/5 xl:block'>
        <img src="img/hero-img.png" alt="" className='object-contain w-full'/>
        </div>
    </header>
  )
}

export default Hero