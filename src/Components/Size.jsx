import React from 'react'

// Redux hooks
import { useDispatch, useSelector } from 'react-redux'

// Actions

import { selectSize } from '../slices/sizes.slice'


const Size = ({children}) => {

const selectedSizes = useSelector((state) => state.size.selectedSizes)  
const isSelected = selectedSizes.includes(children)
  
const dispatch = useDispatch()  

const selectSizeHandler = () => {
  dispatch(selectSize(children))
}
  return (
    <li onClick={selectSizeHandler} className={`w-10 h-10 border  rounded-[4px] cursor-pointer 
        text-[12px] flex items-center 
        justify-center ${isSelected ? "text-[#0E1422] border-[black] font-bold" : "text-[#5C5F6A] border-[#5C5F6A]"}`}>{children}</li>
  )
}

export default Size

