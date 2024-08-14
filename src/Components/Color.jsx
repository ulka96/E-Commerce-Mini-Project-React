import React from 'react'

// Hooks
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { selectColors } from '../slices/colors.slice'

const Color = ({color}) => {

const dispatch = useDispatch();
const selectedColors = useSelector((state) => state.colors.selectedColors)  

const isSelected = selectedColors.includes(color)

const selectColorsAction = () => {
   dispatch(selectColors(color))
}

  return (
    
    <span className={`${isSelected && "h-9 w-9 rounded-full border border-black  flex items-center justify-center"}`}>
    <li onClick={selectColorsAction}
    style={{backgroundColor: color}}
    className={`h-6 w-6   border border-x-2 rounded-full cursor-pointer`}></li>
    </span>
  )
}

export default Color