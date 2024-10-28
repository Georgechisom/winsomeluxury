import React from 'react'
import Title from './Title'
import Container from './Container'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <Container>
        <div className="">
            <div className="flex item-center justify-between text-skyText">
                <Title text='Popular Categories' />
                <Link to={'/category/tvAndAudio'} className='md:inline-flex font-medium duration-200 relative overflow-hidden group'>
                    View All Categories{" "}
                    <span className='absolute bottom-0 left-0 w-full block h-[1px] bg-skyText -translate-x-[100%] group-hover:translate-x-0 duration-300'/>
                </Link>
            </div>
        </div>
    </Container>
  )
}

export default Categories