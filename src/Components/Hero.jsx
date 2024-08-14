import React from 'react'
import Container from './Container'

// Images
import Arrow from "../images/arrow.png"
import Ellipse from "../images/ellipse.png"
import HeroImage from "../images/hero.png"


// Components

import Buttons from './Buttons'

const Hero = () => {
  return (
  
    <div className='bg-[#F6F6F6] pt-[89px]'>
<Container>

        <div className='flex justify-between ' >
        
        <div className='ml-5 '>
            <p className='text-[32px] font-semibold text-[#202533]'>Fresh Arrivals Online</p>
            <p className='text-[14px] font-normal mt-3 mb-14'>Discover Our Newest Collection Today.</p>

             <Buttons>
             <span >View Collections</span>
             <img src={Arrow} className='text-white w-6 h-6' alt=''></img>
             </Buttons>
                
            
        </div>

        <div className='relative mr-4 ' >
            <img src={Ellipse} className='w-[340px] h-[340px] mb-[11px]' alt='ellipse' ></img>

             <img src={HeroImage} className='w-[255px] absolute bottom-[18px] left-[89px] -mb-4' />
        </div>
        </div>





</Container>
      
    </div>

  )
}

export default Hero
