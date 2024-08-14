import React from 'react'

// Components
import Categories from './Categories'
import Colors from './Colors'
import Sizes from './Sizes'
import Price from './Price'
 

const FilterListing = () => {
  return ( 
    <div className="col-span-3 border border-[#E6E7E8] rounded-[6px] pt-6 pb-8 px-4 w-[248px] h-[828px]">

      <Categories/>
      <Colors/>
      <Sizes/>
      <Price/>



    </div>
  )
}

export default FilterListing