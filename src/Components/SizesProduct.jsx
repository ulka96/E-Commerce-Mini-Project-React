import React from 'react'


// Components
import SizeProduct from './SizeProduct'

const styles = {
    ul: "flex flex-wrap gap-2 pb-4 mt-[10px]"
}

const SizesProduct = () => {
  return (
    <div className='w-[438px] '>
    <span className="text-[12px] font-medium text-[#5C5F6A] text-start tracking-wider">SELECT SIZE</span>
  
  <ul className={styles.ul} >

   <SizeProduct/>
   <SizeProduct/>
   <SizeProduct/>
   <SizeProduct/>
   <SizeProduct/>




   
  </ul>
  </div>
  )
}

export default SizesProduct