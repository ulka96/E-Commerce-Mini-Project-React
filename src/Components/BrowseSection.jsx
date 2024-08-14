import React from 'react'

import Container from './Container'

// Images
import Arrow from "../images/arrow.png"
import Cardigan from "../images/cardigan.png"


// Components
import Buttons from './Buttons'

const BrowseSection = () => {
  return (
    <div className='bg-[#F6F6F6] mt-[168px] mb-[152px]'>
    <Container>
    
            <div className='flex justify-between ' >
            
            <div className='ml-5 '>
                <p className='text-[24px] font-bold text-[#0E1422] mt-[52px] '>Browse Our Fashion Paradise!</p>
                <p className='text-[14px] font-normal mt-3 mb-14 w-[462px] text-[#5C5F6A]'>Step into a world of style and explore our diverse collection of clothing categories.</p>
    
                 <Buttons>
                 <span>Start Browsing</span>
                 <img src={Arrow} className='text-white w-6 h-6' alt=''></img>
                 </Buttons>
                    
                
            </div>
    
            <div >
                 <img src={Cardigan} className='w-[225px] ' />
            </div>
            </div>
    
    
    
    
    
    </Container>
          
        </div>
  )
}

export default BrowseSection

