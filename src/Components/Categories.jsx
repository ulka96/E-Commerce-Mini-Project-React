import React from 'react'

// Redux hooks
import { useSelector } from 'react-redux'

// Components
import Category from './Category'

const Categories = () => {

const categories = useSelector((state) => state.categories.categories)
  
  return (
    <div >
        <h1 className='text-[14px] text-[#0E1422] font-medium mb-4'>Categories</h1>
   <ul >

   {categories.map((category) => {
    return <Category key={category}>{category}</Category>
   })


   }
    
  
  
    </ul>

  </div>
  )
}

export default Categories