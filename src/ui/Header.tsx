import React from 'react'
import { Logo } from '../assets'

const Header = () => {
  return (
    <div className='w-full bg-whiteText'>
        <div className='max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0'>
            {/* logo */}
            <img src={Logo} alt="logo" className='w-32' />

            {/* searchbar */}
            <div className='hidden md:inline-flex max-w-3xl w-full relative'>
                <input type="text" placeholder='Search Product' className='w-full flex-1 rounded-full text-gray-600 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset'/>
            </div>
            {/* menubar */}
        </div>
    </div>
  )
};

export default Header;