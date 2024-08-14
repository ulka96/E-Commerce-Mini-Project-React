import React from 'react'

import Size from './Size'

// Hooks
import { useSelector } from 'react-redux'

const Sizes = () => {

const sizes = useSelector((state) => state.size.sizes)
  
  return (
    <div className='mb-10'>
    <h1 className='text-[14px] text-[#0E1422] font-medium mb-4'>Size</h1>

<ul className='flex gap-2 flex-wrap' >

{
  sizes.map((size) => (
    <Size key={size}>{size}</Size>
  ))
}



</ul>

</div>
  )
}

export default Sizes