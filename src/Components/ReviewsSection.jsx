import React from 'react'

// Images
import More from "../images/More.png"
import EmptyStar from "../images/Empty Star.png"

// Components
import Container from './Container'
import SingleReview from './SingleReview'

// React Icons
import { IoChevronDown } from "react-icons/io5";




const ReviewsSection = () => {
  return (
    <Container>
    <div className='flex flex-row gap-8 my-[176px]'>
    
    {/* Details / Reviews */}
    <div className='flex flex-col gap-4 mt-[72px]'>
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
        <p className='text-[16px] text-[#0E1422] font-semibold'>Reviews</p>
        <span className='flex gap-4'>
            <p className='text-[32px] text-[#0E1422] font-black'>4.2</p>
            <p className='text-[14px] text-[#71747E] font-normal mt-3'>— 54 Reviews</p>
        </span>
        
        <div className='flex flex-col'>
        {/* Button Review */}
       
        <div>
            <button className='py-[9.5px] px-6 border border-[#0E1422] rounded-[4px] my-10'>
                Write a review
            </button>
        </div>
         
        {/* Sort By */}
        <button className='flex flex-row gap-[6px] ml-[621px] '>
        <p className='text-[12px] text-[#5C5F6A] font-medium uppercase '>Sort by</p>
        <IoChevronDown />
        </button>
        <div className='border border-[#E9E9EB] mb-6 mt-4'></div>


        {/* Reviews */}

        <div className='grid grid-rows-3 grid-cols-1'>
         
        <SingleReview/>
        <SingleReview/>
        <SingleReview/>

        </div>

        </div>
                 
        {/* Button Load Reviews */}

        <button className='text-[14px] text-[#5C5F6A] font-medium py-3 px-6 
            border border-[#B6B7BC] rounded-[4px] flex items-center justify-center mx-auto mt-16'>Load more reviews</button>

    </div>
    </div>
    </Container>
  )
}

export default ReviewsSection