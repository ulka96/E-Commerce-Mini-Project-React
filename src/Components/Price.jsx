import React from 'react'

const Price = () => {
  return (
    <div className='mb-10'>
      <h1 className='text-[14px] text-[#0E1422] font-medium mb-4'>Price</h1>
      <div className='relative flex items-center'>
        <input
          type='range'
          min='0'
          max='1000'     
          className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
          style={{ background: `linear-gradient(to right, #0E1422 %, #E6E7E8 %)` }}
        />
      </div>
    </div>
  )
}

export default Price