import React from 'react'

import Container from './Container'

import SingleProduct from './SingleProduct'

const CartProduct = () => {
  return (
    <Container>
    <div className='flex flex-col'>
        <h1 className='mt-[72px] mb-[18px] text-[16px] text-[#0E1422] font-semibold'>Your cart</h1>
        <div className='border border-[#E9E9EB] mb-12 w-[628px]'></div>
    </div>



    {/* Products */}
    
    <div className='grid grid-rows-2 grid-cols-1 bg-white gap-10 mb-[348px]'>


    <SingleProduct/>
    <SingleProduct/>
   


    </div>




    </Container>
  )
}

export default CartProduct