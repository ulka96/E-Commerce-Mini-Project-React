import React, { useEffect, useState } from 'react'

import Container from './Container'

import Product from './Product';

// React Icons
import { IoChevronDown } from "react-icons/io5";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

// Actions
import { setCategories } from '../slices/categories.slice';
import { setColors } from '../slices/colors.slice';

// Hooks
import { useDispatch } from 'react-redux';


const Products = () => {

const [products, setProducts] = useState([])  

const dispatch = useDispatch();

const getProducts = async() => {
const response = await fetch("http://localhost:3000/products");
const data = await response.json();

setProducts(data)

const categories = [...new Set(data.map((product) => product.category))];
const colors = [...new Set(data.map((product) => product.color))];
const sizes = [...new Set(data.map((product) => product.size))];

dispatch(setCategories(categories))
dispatch(setColors(colors))

}

useEffect(() => {
  getProducts()
}, [])

  return (
    <div>
    <Container>
     <div>

     <h1 className='text-[14px] text-[#0E1422] font-medium'>Applied Filters:</h1>

     <div className='flex flex-row gap-3 mb-7 mt-3'>
       <button className='py-[6px] px-4 text-[12px] text-[#0E1422] 
       font-medium border border-[#E6E7E8] rounded-2xl flex flex-row gap-2'>Perfume
       <p className='text-xs' >&times;</p>
        </button>

        <button className='py-[6px] px-4 text-[12px] text-[#0E1422] 
       font-medium border border-[#E6E7E8] rounded-2xl flex flex-row gap-2'>Size: 
       <p>M</p>
       <p className='text-xs' >&times;</p>
        </button>
     </div>

      
      <div className='flex flex-row justify-between mb-4'>
        <p className='text-[12px] text-[#5C5F6A] font-medium'>Showing 1-9 of 36 results.</p>

        <button className='flex flex-row gap-[6px] ml-[551px] '>
        <p className='text-[12px] text-[#5C5F6A] font-medium uppercase '>Sort by</p>
        <IoChevronDown />
        </button>
      </div>



     </div>

    <div className='grid grid-cols-3 grid-rows-1 gap-7 '>
     
     {products.map((product) => {
      return <Product
        product = {product}
        key={product.id}
      />
     })}

       </div>

     
     {/* pagination */}
       <div className='py-[2px] px-2 border border-[#E9E9EB] 
       rounded-[4px] flex flex-row mt-16 gap-2 justify-center w-[344px] items-center mx-auto'>

        <button><FiChevronLeft className='w-6 h-6' /></button>
        <button className='py-1 px-4 bg-[#F6F6F6] rounded-[4px] text-[12px] font-medium text-[#0E1422]'>1</button>
        <button className='py-1 px-4 text-[12px] font-medium text-[#474B57]'>2</button>
        <button className='py-1 px-4 text-[12px] font-medium text-[#474B57]'>...</button>
        <button className='py-1 px-4 text-[12px] font-medium text-[#474B57]'>23</button>
        <button className='py-1 px-4 text-[12px] font-medium text-[#474B57]'>24</button>
        <button><FiChevronRight className='w-6 h-6'/></button>

       </div>

       






    </Container>
    </div>
  )
}

export default Products