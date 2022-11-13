import React from 'react'

function Modal({closeUpModal}) {
  return (
    <>
        <div className="modal bg-[#c6c6c6af]" id='modal-wrapper' onClick={() => {
        closeUpModal(false)}}></div>
        
        <div className='w-10/12 sm:1/2 md:w-7/12 lg:w-1/3 my-0 mx-auto bg-white rounded-2xl fixed right-1/2 top-1/2 popup z-30 modal-content'>
      
            <header>
                <div className='flex justify-between p-4  border-b-gray-100 border-b-2'>
                <h2 className='text-2xl text-[#333333] font-bold'>Connect Wallet</h2>
                <button id='modal-close' className='cursor-pointer' onClick={() => {
                    closeUpModal(false)
                }}>X</button>
                </div>
            </header>

            <div className='flex flex-col'>
                <h3 className='text-lg text-[#333333] px-4 mt-6 mb-2'>Choose your preferred wallet:</h3>
                <button className='flex justify-between items-center py-2 px-4 w-[92%] mb-6 mx-auto bg-[#CFD8DC] rounded-2xl'>
                <div className='flex justify-between items-center'>
                    <img src="img/fox.svg" alt="" />
                    <p className='ml-2'>Metamask</p>
                </div>
                <div>
                    <p className='text-3xl text-[#959DA6]'>&gt;</p>
                </div>
                </button>
                <button className='flex justify-between items-center py-2 px-4 w-[92%] border-2 border-gray-100 mx-auto bg-white rounded-2xl mb-6'>
                <div className='flex justify-between items-center'>
                    <img src="img/wallet-connect.svg" alt="" />
                    <p className='ml-2'>WalletConnect</p>
                </div>
                <div>
                    <p className='text-3xl text-[#959DA6]'> &gt; </p>
                </div>
                </button>
            </div>
        </div>
    </>
  )
}

export default Modal