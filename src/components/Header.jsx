import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  window.onload = function() {
    // Modal
  
    // Get the modal
    var modal = document.getElementById("modal-wrapper");
  
    // Get the button that opens the modal
    var btn1 = document.getElementById("connect-wallet");
  
    // Get the <span> element that closes the modal
    var span = document.getElementById("modal-close");
  
    // When the user clicks on the button, open the modal
    btn1.onclick = function() {
      modal.style.display = "block";
      document.body.style.backgroundColor = '#C6C6C6';
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
      document.body.style.backgroundColor = 'white';
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.backgroundColor = 'white';
      }
    };
  
  }

  return (
    <>
      <header className='flex justify-between items-center px-24 py-12'>
          <div><img src="img/logo.svg" alt="" /></div>
          <nav className='flex gap-12'>
              <NavLink to={'/'}  id='locations'>Home</NavLink>
              <NavLink to={'/locations'}  id='locations'>Place to stay</NavLink>
              <a href="#">NFTs</a>
              <a href="#">Community</a>
          </nav>
          <button className='rounded text-white header-button py-2 px-4' id='connect-wallet'>Connect wallet</button>
      </header>

       {/* Pop-Up */}
      <div className="modal hidden" id='modal-wrapper'>
        <div className=' w-1/3 my-0 mx-auto bg-red-300 rounded-2xl fixed right-1/2 top-1/2 popup z-[1]'>
          <header>
            <div className='flex justify-between p-4  border-b-gray-100 border-b-2'>
              <h2 className='text-2xl text-[#333333] font-bold'>Connect Wallet</h2>
              <p id='modal-close' className='cursor-pointer'>X</p>
            </div>
          </header>
          <div className='flex flex-col'>
            <h3 className='text-lg text-[#333333] px-4 mt-6 mb-2'>Choose your preferred wallet:</h3>
            <button className='flex justify-between items-center py-2 px-4 w-[90%] mb-6 mx-auto bg-[#CFD8DC] rounded-2xl'>
              <div className='flex justify-between items-center'>
                <img src="img/fox.svg" alt="" />
                <p className='ml-2'>Metamask</p>
              </div>
              <div>
                <p>&gt;</p>
              </div>
            </button>
            <button className='flex justify-between items-center py-2 px-4 w-[90%] mx-auto bg-white rounded-2xl mb-6'>
            <div className='flex justify-between items-center'>
                <img src="img/wallet-connect.svg" alt="" />
                <p className='ml-2'>WalletConnect</p>
              </div>
              <div>
                <p> &gt; </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default Header