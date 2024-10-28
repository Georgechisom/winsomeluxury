import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { categories } from '../constants/Index';
import { Link } from 'react-router-dom';
import CustomRightArrow from './customRightArrow';
import CustomLeftArrow from './customLeftArrow';

const BannerCategories = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

  return (
    <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={1000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        className='flex flex-row p-4  max-w-screen-xl mx-auto lg:px-0 relative'
    >
        {
            categories.map((items) => (
                <Link key={items?.id} to={`category/${items?._base}`} className='flex items-center justify-center gap-x-2 p-3 shadow-sm shadow-skyText mr-1 mx-2 flex-1 rounded-md hover:border-skyText hover:shadow-lg hover:shadow-skyText'>
                    <img src={items?.image} alt="categoryImage" className='w-14 h-14 rounded-md object-contain shadow-sm shadow-skyText sm:w-12 sm:h-12 sm:text-sm md:text-sm md:w-1o md:h-10' />
                    <p className="text-base font-semibold text-skyText">{items?.name}</p>
                </Link>
            ))
        }
    </Carousel>
  )
}

export default BannerCategories