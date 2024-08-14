import React from 'react'

import Container from './Container'


// Components
import ProductItem from './ProductItem'

// Images
import hoodie1 from "../images2/hoodie1.png"
import hoodie2 from "../images2/hoodie2.png"
import tshirt from "../images2/tshirt.png"
import mock from "../images2/mock.png"

const fakeData = [
  {
   "title" : "Elegant Ebony Sweatshirts",
   "price" : "$35.00",
   "img" : hoodie1
 },

{
   "title" : "Sleek and Cozy Black",
   "price" : "$57.00",
   "img" : hoodie2
 },

 {
   "title" : "Raw Black Tees",
   "price" : "$19.00",
   "img" : tshirt
 },

 {
   "title" : "MOCKUP Black",
   "price" : "$30.00",
   "img" : mock
 },
]


const FeaturedAndListingSection = () => {
  return (
    <div>

    <Container>
    <div className='flex mx-auto justify-center items-center mb-14 gap-6'>
     
     <button className='py-[3px] px-4 text-[14px] font-medium text-[#202533] border border-[#E9E9EB] rounded-2xl  '>Featured</button>
     <button className='py-[3px] px-4 text-[14px] font-normal text-[#5C5F6A] '>Latest</button>

  



    </div>

    <div className='grid grid-cols-4 grid-rows-1 gap-7 '>

    {
      fakeData.map((data) => {

        return <ProductItem data = {data}/>
      })
    }

     </div>

    </Container>
      
    </div>
  )
}

export default FeaturedAndListingSection

