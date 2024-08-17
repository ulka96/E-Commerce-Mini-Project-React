import React from 'react'

import TShirt from "../images/T-shirt.png"

// Hooks
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// Actions
import { removeFromCart, changeAmount } from '../slices/cart.slice'


const SingleProduct = ({cartItem}) => {

const [count, setCount] = useState(cartItem.quantity)  

const dispatch = useDispatch()

// Counter
const incrementHandler = () => {
  const newQuantity = +count + 1 
  setCount(newQuantity)
  dispatch(changeAmount({cartItem,newQuantity}));
  editCartItem(newQuantity)
}

const decrementHandler = () => {
  const newQuantity = count - 1
   setCount(newQuantity)
  dispatch(changeAmount({cartItem, newQuantity}))
 editCartItem(newQuantity)
}

const changeHandler = (e) => {
  const newQuantity = +e.target.value
  setCount(newQuantity)
  dispatch(changeAmount({cartItem, newQuantity}));
  editCartItem(newQuantity)
}  

const removeFromCartHandler = () => {
  dispatch(removeFromCart(cartItem))
}


const editCartItem = async (quantity) => {
  await fetch(`http://localhost:3000/cart/${cartItem.id}`, {
    method: "PATCH",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({quantity})
  })
 }
 
return (
    <div>
    <div className="flex flex-row">


    <div>
      <Link to={`/products/${cartItem.product.id}`}>
      <img src={cartItem.product.image} alt="tshirt" className='w-20 mr-8 bg-[#F6F6F6]' />
      </Link>
    </div>


  
    <div className='flex flex-col gap-[6px] items-center justify-center mb-3'>
    <h1 className='text-[14px] text-[#000000] font-medium w-[200px]'>{cartItem.product.title}p</h1>

     <div className='flex flex-row items-center justify-center mr-auto gap-2'>
         <p className='text-[#5C5F6A] text-[12px] font-medium'>Color:</p>
         <div 
         style={{backgroundColor: `#${cartItem.product.color}`}}
         className='w-3 h-3 rounded-full'></div>
        <p className='text-[12px] text-[#5C5F6A] font-medium '>— Size :</p> <p className='text-[12px] text-[#5C5F6A] font-medium'>{cartItem.size}</p>
    </div>
    </div>


 {/* price */}
    <div>
    <p className='text-[14px] text-[#0E1422] font-medium mr-8 ml-[106px] my-7'>
  {count > 1 ? `$${count * cartItem.product.price}.00` : `$${cartItem.product.price}.00`}
  </p>

    </div>


        {/* quantity */}
        <div className='flex flex-row mt-2 gap-4'>    
        <div className="flex w-[120px] px-4 py-2 mb-10 border border-[#E6E7E8] rounded-[4px]">
        <button onClick={decrementHandler} className="text-2xl text-[#5C5F6A]">-</button>
        <input
          onChange={changeHandler}
          value={count}
          type="number"
          min="1"
          max="100"
          className=" text-[14px] text-center font-medium outline-none border-none w-full ml-3"
          />
        <button onClick={incrementHandler} className="text-2xl text-[#5C5F6A]">+</button>     
      </div>

    </div>

    <div className='w-10 h-10'>
    <button onClick={removeFromCartHandler} className='px-4 py-3 rounded-[4px] bg-[#F6F6F6] text-xl flex justify-center items-center ml-4 mt-2'>&times;</button>
    </div>

    </div>


  </div>
  )
}

export default SingleProduct