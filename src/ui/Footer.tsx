import React from 'react'
import Container from './Container'
import { payment } from '../assets'
import FooterTop from './FooterTop'

const Footer = () => {
  return (
    <div className='mt-10'>
      <FooterTop />
      <Container className='flex flex-col md:flex-row items-center gap-4 justify-between'>
        <p className='text-skyText'>@2024 <b>Winsome luxury Store</b>. All rights reserved.</p>
        <img src={payment} alt="image_of_payment" className='object-cover w-[200px]'/>
      </Container>
    </div>
  )
}

export default Footer