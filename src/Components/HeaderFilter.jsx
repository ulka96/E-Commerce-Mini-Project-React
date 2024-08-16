import React from 'react'

import Container from './Container'

// Icons
import ChevronRight from "../images/ChevronRight.png"


import { useLocation } from 'react-router-dom'
import CartPage from '../pages/CartPage'


const HeaderFilter = () => {

  const {pathname} = useLocation(); 
  
  return (
    <header className={pathname === "/cart-page" ? 'bg-[#F6F6F6] py-8 pl-[40px]' : 'bg-white'}>
    <Container>
   <div>
    <div className='border border-[#F6F6F6]'></div>
    <div className='flex flex-row my-4'>
   <p className='text-[14px] font-medium text-[#5C5F6A]'>Ecommerce</p>
   <img src={ChevronRight} alt="ChevronRight" className='w-6 h-6' />
 
   <p className='text-[14px] font-medium text-[#0E1422] mx-1'>Black man t-shirt</p>


    </div>
  
    </div>
</Container>
  </header>
  )
}

export default HeaderFilter