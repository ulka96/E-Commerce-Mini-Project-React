import React from 'react'
 
// Images
import Share from "../images/share.png"
import Star from "../images/Star.png"
import Heart from "../images/heart.png"

// Components
import Size from "./Size"

// Hooks
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// Actions
import {addToCart} from "../slices/cart.slice";

// Axios
import axios from "axios";

const ProductFilter = ({product}) => {

// Size

const sizes = useSelector((state) => state.size.sizes)
const [count, setCount] = useState(1)

const [selectedSize, setSelectedSize] = useState("");

const dispatch = useDispatch();

const userId = JSON.parse(localStorage.getItem("userId"))

const selectSizeHandler = (size) => {
  setSelectedSize(size)
}

// Counter
const incrementHandler = () => {
  if(count < 100) {
    setCount(+count + 1)
  }
}

const decrementHandler = () => {
  if(count > 1) {
    setCount(+count - 1)
  }
}

const changeHandler = (e) => {
  setCount(e.target.value)
}

// Add to Cart

const addToCartHandler = async() => {

if(!selectedSize) {
  alert("Please select a size");
  return;
}  

if (count < 1 || count > 100) {
  alert("You are not allowed to purchase invalid amount of product")
  return
}

const selectedProduct = {
  quantity: +count,
  size: selectedSize,
  product: product,
  id: String(Math.random()),
  userId : userId,
}

const {data}  = await axios.post(
  "http://localhost:3000/cart", 
  selectedProduct
);

dispatch(addToCart(selectedProduct))
}

  
  return (
    <div>

     <div className='flex flex-row w-[438px] justify-between'>
        <p className='text-[24px] font-bold text-[#0E1422] w-full'>{product?.title}</p>
        <Link to="/share">
        <button><img src={Share} alt="shareIcon" className='w-4' /></button>
        </Link>
     </div>

     <div className='flex flex-row w-[438px] gap-2 mt-3 mb-6'>
     <button className='text-[12px] font-medium text-[#5C5F6A] items-center py-[2px] px-4
     border border-[#E6E7E8] rounded-2xl flex bg-[#F6F6F6]'><span><img src={Star} alt="star" className='w-6 mr-1'/></span>4.2 — 54 Reviews</button>

     <button className='text-[12px] font-medium text-[#0E1422] py-[2px] px-4 
     border border-[#E6E7E8] rounded-2xl'>IN STOCK</button>

     </div>

     <div className='text-[18px] text-[#0E1422] font-semibold mb-8'>${product?.price}.00</div>
     
     {/* Color */}

       <div >
        <h3 className="text-[12px] font-medium text-[#5C5F6A] text-start tracking-wider mb-4">AVAILABLE COLORS</h3>
        <div className='flex gap-2'>
        <div 
        style={{backgroundColor: `#${product.color}`}}
        className="h-6 w-6 flex items-center justify-center rounded-full cursor-pointer"
        ></div>
        </div>
      </div>


    {/* Size */}
    <div className='mb-8 mt-4 '>
        <h3 className="text-[12px] font-medium text-[#5C5F6A] text-start tracking-wider mb-4 ">SELECT SIZE</h3>
        <div className='flex gap-2'>
         
         {
          sizes.map((size) => {
            const isAvailable = product.size?.includes(size)

            return <li key={size} onClick = {() => isAvailable && selectSizeHandler(size)} className={`w-10 h-10 border  rounded-[4px] cursor-pointer 
            text-[12px] flex items-center ${!isAvailable && "opacity-50 relative after:absolute after:left-0 after:right-0 after:bottom-1/2 after:h-[2px] after:bg-red-500" }
            justify-center ${size === selectedSize ? "text-[#0E1422] border-black" : "text-[#5C5F6A] border-[#5C5F6A]"} }`}>{size}</li>
          })
         }


        </div>
      </div>

     {/* Quantity */}
        <h3 className="text-[12px] font-medium text-[#5C5F6A] text-start tracking-wider mb-4 ">QUANTITY</h3>

        <div className="flex items-center w-[180px] px-4 py-3 gap-10 mb-8 border border-[#E6E7E8] rounded-[4px]">
        <button onClick={decrementHandler} className="text-2xl text-[#5C5F6A]">-</button>
        <input
          onChange={changeHandler}
          value={count}
          type="number"
          min="1"
          max="100"
          className=" text-[14px] text-center font-medium outline-none border-none w-full appearance-none"
      
        />
        <button onClick={incrementHandler} className="text-2xl text-[#5C5F6A]">+</button>
        
      </div>


      {/* Add to cart */}
       <div className='flex gap-4'>
      <button onClick={addToCartHandler} className="flex rounded-[4px] font-medium duration-200 justify-center items-center bg-[#0E1422] hover:bg-[#0075ff] text-white text-[14px] px-[104px] py-3">
        Add To Cart
      </button>

       <div className='w-11 h-11 border border-[#E6E7E8] rounded-[4px] items-center justify-center flex'>
         <img src={Heart} alt="heart" className='h-6 w-6' />
       </div>
      </div>


      <p className='mt-3 text-[12px] font-medium text-[#5C5F6A] uppercase '>— Free shipping on orders $100+</p>



  </div>
);
  
}

export default ProductFilter