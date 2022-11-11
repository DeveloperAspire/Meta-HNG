import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardHome from '../components/CardHome'
import MetaBNB from '../components/MetaBNB'
import Hero from '../components/Hero'

function Home() {
  return (
    <>
      <Header />

      <main className=''>
        
        <Hero />

        <section className='flex justify-between items-center coins px-24 py-2 mb-14'>
            <div><img src="img/mb-token.svg" alt="" /></div>
            <div><img src="img/metamask.svg" alt="" /></div>
            <div><img src="img/opensea.svg" alt="" /></div>
        </section>

        <h2 className='text-5xl font-bold text-black text-center mb-14'>Inspiration for your next adventure</h2>

        <CardHome />

        <MetaBNB />
      </main>


      <Footer />
    </>
  )
}

export default Home