import React from 'react'



// Components
import ColorProduct from './ColorProduct'

const styles = {
    ul: "flex flex-wrap gap-2 pb-4 mt-[10px]"
}

const ColorsProduct = () => {
  return (
    <div className='w-[438px] '>
    <span className="text-[12px] font-medium text-[#5C5F6A] text-start tracking-wider">AVAILABLE COLORS</span>
  
  <ul className={styles.ul} >


<ColorProduct/>
<ColorProduct/>
<ColorProduct/>




   
  </ul>
  </div>
  )
}

export default ColorsProduct