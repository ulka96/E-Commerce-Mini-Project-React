import React from 'react'

// Components
import Container from './Container'

import ProductItem from './ProductItem'

// Images
import blackTshirt from "../images2/blackTshirt.png"
import brownTshirt from "../images2/brownTshirt.png"
import whiteTshirt from "../images2/whiteTshirt.png"
import ultraTshirt from "../images2/ultraTshirt.png"

const fakeData = [
   {
    "title" : "Classic Monochrome Tees",
    "price" : "$35.00",
    "img" : blackTshirt
  },

 {
    "title" : "Monochromatic Wardrobe",
    "price" : "$27.00",
    "img" : brownTshirt
  },

  {
    "title" : "Essential Neutrals",
    "price" : "$22.00",
    "img" : whiteTshirt
  },

  {
    "title" : "UTRAANET Black",
    "price" : "$43.00",
    "img" : ultraTshirt
  },
]

const BestSeller = () => {
  return (
    <div>

    <Container>
    <div className='flex flex-col mx-auto justify-center items-center'>
    <p className='text-[12px] font-medium text-[#878A92]'>SHOP NOW</p>
    <p className='text-[24px] font-bold text-[#0E1422] mb-20 mt-2'>Best Selling</p>
    </div>

    <div className='grid grid-cols-4 grid-rows-1 gap-7 '>
    {

      fakeData.map((data) => {

        return  <ProductItem data = {data}
    
        />
      })
    }

       
    
      

      

     </div>

    </Container>
      
    </div>
  )
}

export default BestSeller
