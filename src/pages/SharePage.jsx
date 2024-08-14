import React from 'react'

import Container from '../Components/Container'

//Icons
import Copy from "../images/Copy.png"

// React icons
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";




const SharePage = () => {
  return (
    
    <div className='bg-[#F6F6F6]'>
    <Container >
    <div className='w-[424px] h-screen flex justify-center items-center mx-auto flex-col '
   
    >
    {/* Products */}
    <div className='bg-white flex flex-col pt-8 pb-14 pl-10 pr-16'>

     <h1 className='text-[16px] text-[#0E1422] font-semibold'>Copy Link</h1>

     <div className='flex flex-row gap-2 mt-6 mb-10'>
     <input type="text" placeholder='https://devcut.io/ecommerce/prod...' 
     className='py-[10px] px-[14px] border border-[#E6E7E8] rounded-[6px] w-[268px]
      placeholder: text-[#333845] placeholder:text-[14px] placeholder:font-normal'/>

      <button className='border border-[#E6E7E8] py-[9px] px-[7px] rounded-[6px]'>
       <img src={Copy} alt="copy" className='w-6 h-6' />
      </button>
      </div>

      <h1 className='text-[16px] text-[#0E1422] font-semibold'>Share</h1>

      <ul className='gap-6 flex flex-row mt-6'>
        <li><FaFacebookF className='w-6 h-6' /></li>
        <li><RiTwitterXFill className='w-6 h-6' /></li>
        <li><FaPinterestP className='w-6 h-6' /></li>
        <li><FaTelegramPlane className='w-6 h-6' /></li>
        <li><FaWhatsapp className='w-6 h-6' /></li>
      </ul>
       
    </div>


       
    </div>
    </Container>
    </div>
   
  )
}

export default SharePage