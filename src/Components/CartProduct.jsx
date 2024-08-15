import React from 'react'

import Container from './Container'

// Components
import SingleProduct from './SingleProduct'

// Hooks
import {useSelector} from 'react-redux'

const CartProduct = () => {

const cartItems = useSelector((state) => state.cart)

  return (
    <Container>
    <div className='flex flex-col w-full '>
        <h1 className='mt-[72px] mb-[18px] text-[16px] text-[#0E1422] font-semibold'>Your cart</h1>
        <div className='border border-[#E9E9EB] mb-12 '></div>
    </div>



    {/* Products */}
    
    <div className='grid grid-rows-2 grid-cols-1 bg-white gap-10 mb-[348px] w-full '>

    {
       cartItems.map((cartItem) => {
        return <SingleProduct cartItem = {cartItem}/>
       })
    }
   
    </div>




    </Container>
  )
}

export default CartProduct