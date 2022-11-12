import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardLocations from '../components/CardLocations'

function Locations() {
  return (
    <>
        <Header />

        <main className='mx-24 py-12'>
            <div className='flex items-center justify-around'>
                <div className="w-[80%] flex justify-between">
                    <a href="" className='text-xl text-[#434343]'>Restaurant</a>
                    <a href="" className='text-xl text-[#434343]'>Cottage</a>
                    <a href="" className='text-xl text-[#434343]'>Castle</a>
                    <a href="" className='text-xl text-[#434343]'>Fantasy City</a>
                    <a href="" className='text-xl text-[#434343]'>Beach</a>
                    <a href="" className='text-xl text-[#434343]'>Cabins</a>
                    <a href="" className='text-xl text-[#434343]'>Off-Grid</a>
                    <a href="" className='text-xl text-[#434343]'>Farm</a>
                </div>
                <div className='w-[13%] locations-form'>
                    <form action="" className='flex'>
                        <input type="text" name="" id="" placeholder='Location' className='' />
                        <span className='filter'><img src="img/filter.svg" alt="" /></span>
                    </form>
                </div>
            </div>
        </main>

        <CardLocations />

        <Footer />
    </>
  )
}

export default Locations