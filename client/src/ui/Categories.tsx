import React from 'react'
import Title from './Title'
import Container from './Container'
import { Link } from 'react-router-dom'
import { categories } from '../constants/Index'

const Categories = () => {
  return (
    <Container>
        <div className="mb-10">
            <div className="flex item-center justify-between text-skyText">
                <Title text='Popular Categories' />
                <Link to={'/category/tvAndAudio'} className='md:inline-flex font-medium duration-200 relative overflow-hidden group mt-3'>
                    View All Categories{" "}
                    <span className='absolute bottom-0 left-0 w-full block h-[1px] bg-skyText -translate-x-[100%] group-hover:translate-x-0 duration-300'/>
                </Link>
            </div>
            <div className='w-full h-[1px] bg-skyText mt-3'/>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 mt-10'>
            {
                categories.map((item) => (
                    <Link to={`/category/${item?._base}`} key={item?.id} className='w-full h-auto relative group overflow-hidden p-2 shadow-sm shadow-skyText rounded-lg object-cover'>
                        <img src={item?.image} alt="categoryImage" className='w-full h-32 rounded-md group-hover:scale-110 duration-300 hover:scale-110 object-contain' />
                        <div className=' bottom-1 w-full text-center'>
                            <p className='text-sm md:text-base font-bold text-skyText'>{item?.name}</p>
                        </div>
                    </Link>
                ))              
            }
        </div>
    </Container>
  )
}

export default Categories