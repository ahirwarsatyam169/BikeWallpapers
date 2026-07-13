import React from 'react'
import logo from '../assets/superbikewallslogo.png'
import search from '../assets/search.png'
import hamburger from '../assets/hamburgermenu.png'
function Navbar() {
  return (
    <div className='p-2 sticky z-50 top-0 h-16 w-full border border-white/50 flex justify-between bg-red-600'>
        <img className='scale-[50%] -translate-x-10' src={logo} alt="" />

        <div className='flex justify-center items-center w-[50px] -translate-x-[35px]'>
            <input className='border rounded-xl p-1 ' type="text" placeholder='search' />
            <img className='scale-[60%] border rounded-[50%] p-2' src={search} alt="" />
        </div>

        <img className='scale-[50%]' src={hamburger} alt="" />

    </div>
  )
}

export default Navbar