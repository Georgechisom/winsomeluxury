import React from 'react'
import Container from './Container';
import homeBanner  from '../assets/banners/living5.jpg';
import home from '../assets/home.jpg'
import LinkButton from './LinkButton';

const HomeBanner = () => {
  return (
    <Container className='relative py-5 overflow-hidden'>
        <div className='relative'>
            <img src={homeBanner} alt="homebanner" className='w-full object-cover rounded-md' />
            <div className='w-full h-full absolute top-0  left-0 '/>
        </div>
        <div className='absolute inset-0 flex flex-col justify-center px-10'>
          <h2 className='text-2xl md:text-4xl lg:6xl text-whiteText font-bold'>
            HD Tele~Vault T.V
          </h2>
          <p className='text-base md:text-lg font-semibold leading-6 text-whiteText/100 max-w-[400px] mt-4 drop-shadow-lg'>The lastest Highest Definition with an increase in resolution for a clearer, more detailed picture</p>
          <LinkButton className='w-48 flex items-center justify-center bg-whiteText text-skyText font-semibold hover:bg-skyText hover:text-whiteText shadow-sm shadow-skyText mt-4 hover:shadow-none' />
        </div>
    </Container>
  )
}

export default HomeBanner