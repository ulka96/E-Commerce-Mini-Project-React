import React from 'react'
import { Link } from 'react-router-dom'

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

    {/* Reviews text */}

    <div className='w-[727px] -mt-[72px]'>
        <p className='text-[16px] text-[#0E1422] font-semibold'>Reviews</p>
        <span className='flex gap-4'>
            <p className='text-[32px] text-[#0E1422] font-black'>4.2</p>
            <p className='text-[14px] text-[#71747E] font-normal mt-3'>— 54 Reviews</p>
        </span>
        
        <div className='flex flex-col'>
        {/* Button Review */}
       
        <div>
            <Link to="/review">
            <button className='py-[9.5px] px-6 border border-[#0E1422] rounded-[4px] my-10'>
                Write a review
            </button>
            </Link>
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
    {/* </div> */}
    </Container>
  )
}

export default ReviewsSection