import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardLocations from '../components/CardLocations'

function Locations() {
  return (
    <>
        <Header />

        <main className='px-24 py-12'>
            <div className='flex gap-8 items-center'>
                <a href="" className='text-4 text-[#434343]'>Restaurant</a>
                <a href="">Cottage</a>
                <a href="">Castle</a>
                <a href="">Fantasy City</a>
                <a href="">Beach</a>
                <a href="">Cabins</a>
                <a href="">Off-Grid</a>
                <a href="">Farm</a>
                <form action="" className='flex items-center locations-form'>
                    <input type="text" name="" id="" placeholder='Location' className=''/>
                    <img src="img/filter.svg" alt="" />
                </form>
            </div>
        </main>

        <CardLocations />

        <Footer />
    </>
  )
}

export default Locations