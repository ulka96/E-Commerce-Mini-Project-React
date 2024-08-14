import React from 'react'

// Images
import More from "../images/More.png"
import EmptyStar from "../images/Empty Star.png"

import Container from './Container'

const DetailsAndReviews = () => {
  return (
    <Container>
    <div className='flex flex-row gap-8 my-[176px]'>
    
    {/* Details / Reviews */}
    <div className='flex flex-col gap-4'>
        <button className='py-2 pl-[29px] pr-[137px] flex flex-row gap-[10px] bg-[#F6F6F6] rounded-[8px] '>
            <img src={More} alt="more" className='w-6 h-6' />
            <p className='text-[14px] font-medium text-[#0E1422]'>Details</p>
        </button>

        <button className='py-2 pl-[29px] pr-[137px] flex flex-row gap-[10px]  rounded-[8px] '>
            <img src={EmptyStar} alt="more" className='w-6 h-6' />
            <p className='text-[14px] font-medium text-[#0E1422]'>Reviews</p>
        </button>
    </div>
    
    {/* Details text */}

    <div>
     <p className='mb-6 text-[16px] text-[#0E1422] font-semibold '>Detail</p>
     <p className='text-[14px] text-[#5C5F6A] font-normal w-[727px] leading-[24px]'>Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed 
        for comfort, these versatile black tees are a must-have addition to your collection.</p>
     <p className='text-[14px] text-[#5C5F6A] font-normal w-[727px] leading-[24px]'>The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, 
        these black t-shirts are the perfect choice, effortlessly complementing any outfit.</p>


    </div>




    </div>
    </Container>
  )
}

export default DetailsAndReviews