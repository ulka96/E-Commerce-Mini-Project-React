import React from 'react'

import Container from '../Components/Container'

// React icons
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";



const WriteReviewPage = () => {
  return (
    <div className='bg-[#F6F6F6] h-screen flex justify-center items-center'>
    <Container >
    <div className='w-[424px]  bg-white  mx-auto flex-col '
   
    >

     <div className='pt-8 px-10 pb-5 flex flex-row justify-between w-full'>
        <p className='text-[16px] text-[#0E1422] font-semibold'>Write Review</p>
        <button className='w-[22px] h-8 text-xl'>&times;</button>
     </div>

     <div className='border border-[#E9E9EB]'></div>
     
     <div className='m-10 flex flex-col'>
     {/* Form */}

     <form className='flex flex-col'>
         <label htmlFor="email" className='text-[14px] text-[#474B57] font-medium'>Email</label>
         <input type="email" id='email' className='border border-[#E6E7E8] py-[10px] px-[15px] rounded-[6px] mb-[15px]'/>
         
         <label htmlFor="Full name" className='text-[14px] text-[#474B57] font-medium'>Full name</label>
         <input type="text" id='Full name' className='border border-[#E6E7E8] py-[10px] px-[15px] rounded-[6px] mb-[15px]'/>

         <label htmlFor="review" className='text-[14px] text-[#474B57] font-medium'>Review</label>
         
         <textarea name="review" id="review" className='border border-[#E6E7E8] rounded-[6px] py-[10px] px-[15px]'></textarea>
     </form>

     <div className="flex gap-1 mr-auto mt-6 mb-12">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>

      <button className='text-white text-[14px] font-medium bg-[#0E1422] rounded-[4px] py-2 mb-16'>
      Submit Your Review
        </button>
   
      </div>


       
    </div>
    </Container>
    </div>
  )
}

export default WriteReviewPage