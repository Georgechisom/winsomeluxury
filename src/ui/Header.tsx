import React, { useState } from 'react'
import { Logo } from '../assets'
import { IoClose, IoSearchOutline } from 'react-icons/io5'
import { FiShoppingBag, FiStar, FiUser } from 'react-icons/fi';
import Container from './Container';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const bottomNavigation = [
  { title: "Home", link: "/"},
  { title: "Shop", link: "/product"},
  { title: "Cart", link: "/cart"},
  { title: "Orders", link: "/orders"},
  { title: "My Account", link: "/profile"},
  { title: "Blog", link: "/blog"},
]

const Header = () => {
  
  const [searchText, setSearchText] = useState("");

  return (
    <div className='w-full bg-whiteText'>
        <div className='max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0'>
            {/* logo */}
            <Link to={"/"}>
              <img src={Logo} alt="logo" className='w-32' />
            </Link>

            {/* searchbar */}
            <div className='hidden md:inline-flex max-w-3xl w-full relative'>
                <input 
                  type="text" 
                  placeholder='Search Product...' 
                  className='w-full flex-1 rounded-full text-blue-600 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-blue-600 placeholder:font-normal focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:text-sm px-4 py-2'
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
                {searchText  ? 
                  ( 
                    <IoClose onClick={() => setSearchText("")} className='absolute top-2.5 right-4 text-xl text-red-300 hover:text-red-500 cursor-pointer duration-200'/> 
                  ) : 
                  ( 
                    <IoSearchOutline className='absolute top-2.5 right-4 text-xl text-blue-600'/> 
                  )
                }
            </div>
            {/* menubar */}
            <div className='flex items-center justify-center gap-x-6'>
              <div className=' text-2xl cursor-pointer'>
                <Link to={"/profile"}>
                  <FiUser className='hover:text-skyText duration-200 text-blue-600'/>
                </Link>
              </div>
              <Link to={"/favorite"} className='text-lg relative block'>
                <FiStar className='hover:text-skyText duration-200 text-blue-600 cursor-pointer' />
                <span className='inline-flex items-center justify-center bg-redText text-whiteText absolute -top-2 -right-3 text-{9px} rounded-full w-4 h-4'>0</span>
              </Link>
              <Link to={"/cart"} className='text-lg relative block'>
                <FiShoppingBag className='hover:text-skyText duration-200 text-blue-600 cursor-pointer' />
                <span className='inline-flex items-center justify-center  bg-redText text-whiteText absolute -top-2 -right-3 text-{9px} rounded-full w-4 h-4'>0</span>
              </Link>
            </div>
        </div>
        <div className='w-full bg-skyText text-whiteText'>
          <Container className='py-3 max-w-4xl flex items-center justify-between gap-5'>
            <p className='flex items-center gap-1'>
              Select Category <FaChevronDown  className='mt-1'/>
            </p>
              {
                bottomNavigation.map(({ title, link  }) => (
                  <Link 
                    to={link} 
                    key={title} className='uppercase hidden  md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-whiteText hover:italic duration-200 relative overflow-hidden group'>
                    {title}
                    <span className='inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-200'/>
                  </Link>
                ))
              }
          </Container>
        </div>
    </div>
  )
};

export default Header;