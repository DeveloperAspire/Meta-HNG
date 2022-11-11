import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />

      <main className=''>
        <header className='flex items-center justify-between gap-20 px-24 py-12 mb-24'>
          <div className='flex flex-col gap-5 basis-7/12'>
            <h1 className='text-[56px] text-[#434343] w-11/12 basis-1/2 hero-head'>Rent a <span className='text-[#A02279] font-bold'>Place</span> away from <span className='text-[#A02279] font-bold'>Home</span> in the <span className='text-[#A02279] font-bold'>Metaverse</span></h1>
            <p className=' w-11/12 text-2xl text-[#434343]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <form action="" className='w-full'>
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

        <section className='flex justify-between items-center coins px-24 py-2 mb-14'>
            <div><img src="img/mb-token.svg" alt="" /></div>
            <div><img src="img/metamask.svg" alt="" /></div>
            <div><img src="img/opensea.svg" alt="" /></div>
        </section>

        <h2 className='text-5xl font-bold text-black text-center mb-14'>Inspiration for your next adventure</h2>

        <section className='px-24 py-1 flex flex-wrap gap-6'>
          <div className="card-container p-4 basis-[23%]">
            <div>
              <img src="img/img-1.svg" alt="" />  
              <img src="img/love" alt="" />
            </div>
            <div className='flex justify-between py-4'>
              <p className='text-xs text-[#434343]'>Desert king</p>
              <p className='text-xs text-[#434343] font-bold'>1MBT per night</p>
            </div>

            <div className='flex justify-between pb-4'>
              <p className='text-xs text-[#434343]'>2345km away</p>
              <p className='text-xs text-[#434343] text-right'>available for 2weeks stay</p>
            </div>

            <div><img src="img/star.svg" alt="" /></div>
          </div>

          <div className="card-container p-4 basis-[23%]">
            <div>
              <img src="img/img-2.svg" alt="" />  
              <img src="img/love" alt="" />
            </div>
            <div className='flex justify-between py-4'>
              <p className='text-xs text-[#434343]'>Desert king</p>
              <p className='text-xs text-[#434343] font-bold'>1MBT per night</p>
            </div>

            <div className='flex justify-between pb-4'>
              <p className='text-xs text-[#434343]'>2345km away</p>
              <p className='text-xs text-[#434343]'>available for 2weeks stay</p>
            </div>

            <div><img src="img/star.svg" alt="" /></div>
          </div>

          <div className="card-container p-4 basis-[23%]">
            <div>
              <img src="img/img-3.svg" alt="" />  
              <img src="img/love" alt="" />
            </div>
            <div className='flex justify-between py-4'>
              <p className='text-xs text-[#434343]'>Desert king</p>
              <p className='text-xs text-[#434343] font-bold'>1MBT per night</p>
            </div>

            <div className='flex justify-between pb-4'>
              <p className='text-xs text-[#434343]'>2345km away</p>
              <p className='text-xs text-[#434343] text-right'>available for 2weeks stay</p>
            </div>

            <div><img src="img/star.svg" alt="" /></div>
          </div>

          <div className="card-container p-4 basis-[23%]">
            <div>
              <img src="img/img-4.svg" alt="" />  
              <img src="img/love" alt="" />
            </div>
            <div className='flex justify-between py-4'>
              <p className='text-xs text-[#434343]'>Desert king</p>
              <p className='text-xs text-[#434343] font-bold'>1MBT per night</p>
            </div>

            <div className='flex justify-between pb-4'>
              <p className='text-xs text-[#434343]'>2345km away</p>
              <p className='text-xs text-[#434343] text-right'>available for 2weeks stay</p>
            </div>

            <div><img src="img/star.svg" alt="" /></div>
          </div>

          <div className="card-container p-4 basis-[23%]">
            <div>
              <img src="img/img-5.svg" alt="" />  
              <img src="img/love" alt="" />
            </div>
            <div className='flex justify-between py-4'>
              <p className='text-xs text-[#434343]'>Desert king</p>
              <p className='text-xs text-[#434343] font-bold'>1MBT per night</p>
            </div>

            <div className='flex justify-between pb-4'>
              <p className='text-xs text-[#434343]'>2345km away</p>
              <p className='text-xs text-[#434343] text-right'>available for 2weeks stay</p>
            </div>

            <div><img src="img/star.svg" alt="" /></div>
          </div>

          <div className="card-container p-4 basis-[23%]">
            <div>
              <img src="img/img-6.svg" alt="" />  
              <img src="img/love" alt="" />
            </div>
            <div className='flex justify-between py-4'>
              <p className='text-xs text-[#434343]'>Desert king</p>
              <p className='text-xs text-[#434343] font-bold'>1MBT per night</p>
            </div>

            <div className='flex justify-between pb-4'>
              <p className='text-xs text-[#434343]'>2345km away</p>
              <p className='text-xs text-[#434343] text-right'>available for 2weeks stay</p>
            </div>

            <div><img src="img/star.svg" alt="" /></div>
          </div>

          <div className="card-container p-4 basis-[23%]">
            <div>
              <img src="img/img-7.svg" alt="" />  
              <img src="img/love" alt="" />
            </div>
            <div className='flex justify-between py-4'>
              <p className='text-xs text-[#434343]'>Desert king</p>
              <p className='text-xs text-[#434343] font-bold'>1MBT per night</p>
            </div>

            <div className='flex justify-between pb-4'>
              <p className='text-xs text-[#434343]'>2345km away</p>
              <p className='text-xs text-[#434343] text-right'>available for 2weeks stay</p>
            </div>

            <div><img src="img/star.svg" alt="" /></div>
          </div>

          <div className="card-container p-4 basis-[23%]">
            <div>
              <img src="img/img-8.svg" alt="" />  
              <img src="img/love" alt="" />
            </div>
            <div className='flex justify-between py-4'>
              <p className='text-xs text-[#434343]'>Desert king</p>
              <p className='text-xs text-[#434343] font-bold'>1MBT per night</p>
            </div>

            <div className='flex justify-between pb-4'>
              <p className='text-xs text-[#434343]'>2345km away</p>
              <p className='text-xs text-[#434343] text-right'>available for 2weeks stay</p>
            </div>

            <div><img src="img/star.svg" alt="" /></div>
          </div>
        </section>

        <section className='flex items-center px-24 py-2'>
          <div>
            <h3>Metabnb NFTs</h3>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <a href="">Learn more</a>
          </div>

          <div><img src="img/metabnb.svg" alt="" /></div>
        </section>
      </main>


      <Footer />
    </>
  )
}

export default Home