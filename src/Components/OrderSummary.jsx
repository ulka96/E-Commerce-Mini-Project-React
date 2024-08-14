import React from 'react'

import Container from './Container'

const OrderSummary = () => {
  return (
   <Container>

    <div className='flex flex-col pt-8 pb-10 px-6 border border-[#E6E7E8] rounded-[4px] mt-14'>
     
     <h1 className='text-[#0E1422] font-semibold mb-10'>Order Summary</h1>

     <div className='flex flex-row justify-between'>
        <p className='text-[#5C5F6A] text-[14px] font-medium'>Subtotal</p>
        <p className='text-[#0E1422] text-[14px] font-medium'>$ 90.00</p>
     </div>

     <div className='flex flex-row justify-between my-3'>
        <p className='text-[#5C5F6A] text-[14px] font-medium'>Shipping: </p>
        <p className='text-[#0E1422] text-[14px] font-medium'>Free</p>
     </div>

     <div className='flex flex-row justify-between mb-6'>
        <p className='text-[#5C5F6A] text-[14px] font-medium'>Tax: </p>
        <p className='text-[#0E1422] text-[14px] font-medium'>$ 3.00</p>
     </div>

     <div className='border border-[#E6E7E8]'></div>


     <div className='flex flex-row justify-between mb-8 mt-6 '>
        <p className='text-[#0E1422] text-[14px] font-medium'>Total</p>
        <p className='text-[#0E1422] text-[14px] font-medium'>$ 100.00</p>
     </div>

     <button className='py-[10px] bg-[#0E1422] rounded-[4px] text-white'>Checkout</button>


     <p className='text-[12px] font-medium text-[#0E1422] underline mt-8 mx-auto'>Continue Shopping</p>






    </div>
    </Container>
  )
}

export default OrderSummary