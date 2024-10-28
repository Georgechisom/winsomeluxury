import React from 'react'
import Container from './Container'
import { highlightsProducts } from '../constants/Index'
import { Link } from 'react-router-dom'

const Highlights = () => {
    const [HighlightsData, setHighlightsData] = React.useState([])
  return (
    <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
            highlightsProducts.map((item) => (
                <div key={item?._id} className='relative h-60  rounded-lg shadow-md cursor-pointer overflow-hidden group'>
                    <div className='absolute inset-0 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-110' style={{ backgroundImage:`url(${item?.image})`, color: item?.color }} />
                    <div className="relative flex flex-col z-10 justify-center  h-full p-6">
                        <div className="text-whiteText font-semibold">
                            <h3 className="text-2xl font-bold max-w-44">{item?.name}</h3>
                            <p className='text-base mt-2 font-bold'>{item?.title}</p>
                        </div>
                        <Link className='text-whiteText italic ' to={item?._base}>{item?.buttonTitle}</Link>
                    </div>
                </div>
            ))
        }
        <div />
    </Container>
  )
}

export default Highlights