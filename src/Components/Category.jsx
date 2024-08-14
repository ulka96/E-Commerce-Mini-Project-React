import React from 'react'

// Hooks
import { useDispatch , useSelector } from 'react-redux';

// Actions
import { selectCategory as selectCategoryAction } from '../slices/categories.slice';

const Category = (props) => {

const dispatch = useDispatch();
const selectedCategories = useSelector((state) => state.categories.selectedCategories)

const isSelected = selectedCategories.includes(props.children)


const selectCategory = () => {
   dispatch(selectCategoryAction(props.children))
  }

  return (
    <li onClick={selectCategory} className={`py-3 flex ${isSelected && "font-black"}  flex-row gap-[10px] border-b`}>
    <input type="checkbox" className='w-4 h-4 border border-x-2 border-[#E6E7E8] rounded-[3px] mt-[1.5px]' />
       <p className={`text-[14px] text-[#474B57] cursor-pointer`}>{props.children}</p> 
       
</li>
  )
}

export default Category