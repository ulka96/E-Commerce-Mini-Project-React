import React from 'react'

import Container from './Container'

const FooterWithSubscribe = () => {
  return (
    <div className='bg-[#F6F6F6] mt-[176px] mb-[74px]'>
    <Container>
    
    <div className='flex justify-between ' >
            
    <div >
        <p className='text-[24px] font-bold text-[#0E1422] mt-[52px] '>Join Our Newsletter</p>
        <p className='text-[14px] font-normal mt-3 mb-14 w-[462px] text-[#5C5F6A]'>We love to surprise our subscribers with occasional gifts.</p> 
    </div>


    <div className='mt-[78px]  gap-4'>
    <input 
    type="text" 
    placeholder='Your email address' 
    className='placeholder:text-[#878A92] placeholder:text-[14px] placeholder:font-medium 
    py-[10px] pl-[15px] pr-[177px] border border-[#E6E7E8] rounded-[6px] bg-[#F6F6F6]'/>

    <button className='py-[9.5px] px-6 text-[#FFFFFF] text-[14px] font-medium bg-[#0E1422] rounded-[4px] ml-4'>Subscribe</button>

    </div>
    
    </div>
    
    </Container>

 
          
        </div>
  )
}

export default FooterWithSubscribe