import React from 'react'

import TShirt from "../images/T-shirt.png"

const SingleProduct = () => {
  return (
    <div>
    <div className="flex flex-row">


    <div>
      <img src={TShirt} alt="tshirt" className='w-20 mr-8' />
    </div>


  
    <div className='flex flex-col gap-[6px]'>
    <h1 className='text-[14px] text-[#000000] font-medium w-[168px]'>Raw Black T-Shirt Lineup</h1>

     <div className='flex flex-row items-center justify-center mr-auto gap-2'>
         <p className='text-[#5C5F6A] text-[12px] font-medium'>Color:</p>
         <div className='w-3 h-3 bg-[#98BE9E] rounded-full'></div>
        <p className='text-[12px] text-[#5C5F6A] font-medium '>— Size :</p> <p className='text-[12px] text-[#5C5F6A] font-medium'>M</p>
    </div>
    </div>


 {/* price */}
    <div>
      <p className='text-[14px] text-[#0E1422] font-medium mr-8 ml-[106px] my-7'>$75.00</p>
    </div>


        {/* quantity */}
        <div className='flex flex-row mt-2 gap-4'>    
        <div className="flex w-[120px] px-4 py-2 mb-10 border border-[#E6E7E8] rounded-[4px]">
        <button className="text-2xl text-[#5C5F6A]">-</button>
        <input
          type="number"
          min="1"
          max="100"
          className=" text-[14px] text-center font-medium outline-none border-none w-full ml-3"
          />
        <button className="text-2xl text-[#5C5F6A]">+</button>     
      </div>

    </div>

    <div className='w-10 h-10'>
    <button className='px-4 py-3 rounded-[4px] bg-[#F6F6F6] text-xl flex justify-center items-center ml-4 mt-2'>&times;</button>
    </div>

    </div>


  </div>
  )
}

export default SingleProduct