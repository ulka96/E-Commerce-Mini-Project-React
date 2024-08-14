import React from 'react'

import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Link to= {`/products/${product?.id}`}>
    <div>
    {/* Product 1 */}
   <div >
   <div className='bg-[#F6F6F6] rounded-lg'>
   <img src={product?.image} 
   alt="Tshirt" className='w-full aspect-[7/8] mr-10' />
   </div>
   <p className='text-[14px] font-medium mt-[25px] mb-3'>{product?.title}</p>
   
   <div className='flex gap-4'>
      <button className='text-[12px] font-medium text-[#0E1422] py-[2px] px-4 border border-[#E6E7E8] rounded-2xl'>IN STOCK</button>
    <p className='text-[14px] font-normal text-[#474B57]'>${product?.price} .00</p>
   </div>
   
   </div> 
   
   
    </div>
   </Link>
  )
}

export default Product