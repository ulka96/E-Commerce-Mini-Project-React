import React from 'react'

import Container from './Container'

// Images

import Car from '../images/car.png'
import Symbol from "../images/symbol.png"
import Submit from "../images/submit.png"



const Features = () => {
  return (
    <div >
<Container>
   <div className='grid grid-cols-3 grid-rows-1 mt-[88px] mb-[72px] gap-[54px] ml-3'>
    
   <div>
     <img src={Car} alt="car" className='w-[48px] h-[48px]' />
     <p className='text-[16px] font-semibold text-[#202533] mt-6 mb-3'>Free Shipping</p>
     <p className='text-[14px] font-normal text-[#5C5F6A] w-[272px]'>Upgrade your style today and get FREE shipping on all orders! Don't miss out.</p>
   </div>


   <div>
     <img src={Symbol} alt="symbol" className='w-[48px] h-[48px]' />
     <p className='text-[16px] font-semibold text-[#202533] mt-6 mb-3'>Satisfaction Guarantee</p>
     <p className='text-[14px] font-normal text-[#5C5F6A] w-[272px]'>Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</p>
   </div>

   <div>
     <img src={Submit} alt="submit" className='w-[48px] h-[48px]' />
     <p className='text-[16px] font-semibold text-[#202533] mt-6 mb-3'>Secure Payment</p>
     <p className='text-[14px] font-normal text-[#5C5F6A] w-[272px]'>Your security is our priority. Your payments are secure with us.</p>
   </div>





   </div>

</Container>
    </div>
  )
}

export default Features
