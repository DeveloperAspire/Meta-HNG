import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardLocations from '../components/CardLocations'
import {NavLink} from 'react-router-dom'

function Locations() {
  return (
    <>
        <Header />

        <main className='mx-6 sm:mx-24 py-12'>
            <div className='flex items-center justify-between gap-2 sm:gap-0 lg:justify-start'>
                <div className="w-1/2 lg:w-[80%]">
                    <div className='flex justify-between max-[1062px]:hidden'>
                        <NavLink to={''} className='text-xl text-[#434343]'>Restaurant</ NavLink>
                        <NavLink to={''} className='text-xl text-[#434343]'>Cottage</ NavLink>
                        <NavLink to={''} className='text-xl text-[#434343]'>Castle</ NavLink>
                        <NavLink to={''} className='text-xl text-[#434343]'>Fantasy City</ NavLink>
                        <NavLink to={''} className='text-xl text-[#434343]'>Beach</ NavLink>
                        <NavLink to={''} className='text-xl text-[#434343]'>Cabins</ NavLink>
                        <NavLink to={''} className='text-xl text-[#434343]'>Off-Grid</ NavLink>
                        <NavLink to={''} className='text-xl text-[#434343]'>Farm</ NavLink>
                    </div>
                    <div className='min-[1062px]:hidden'>
                        <label htmlFor="locations" className='pr-0'></label>
                        <select name="locations" id="locations">
                            <option value="restaurant">Restaurant</option>
                            <option value="cottage">Cottage</option>
                            <option value="castle">Castle</option>
                            <option value="fantasy-city">Fantasy City</option>
                            <option value="beach">Beach</option>
                            <option value="cabins">Cabins</option>
                            <option value="off-grid">Off-Grid</option>
                            <option value="farm">Farm</option>
                        </select>
                    </div>
                </div>
                <div className='w-1/2 lg:w-[13%] lg:ml-8 locations-form'>
                    <form action="" className='flex'>
                        <input type="text" name="" id="" placeholder='Location' className='' />
                        <span className='filter cursor-pointer'><img src="img/filter.svg" alt="" /></span>
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