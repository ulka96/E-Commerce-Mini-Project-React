import React from 'react'

import { Link, useNavigate } from 'react-router-dom';

// Logo
import Logo from "../images/Logo.png";
import Search from "../images/Search.png";
import Cart from "../images/cart.png"
import Profile from "../images/profile.png"

import Container from './Container';
import { useSelector } from 'react-redux';
import { MdNumbers } from 'react-icons/md';


const styles = {

    header: "my-6 flex items-center justify-between font-inter  w-full ",
    logo: "h-10 w-[163px] pl-4 mr-[103px] ",
    ul: "flex gap-8 mt-3",
    li: "text-[14px] font-medium text-[#5C5F6A] active:font-bold ",
    span: "text-[#5C5F6A]",
    btnGroup: "flex gap-4",
    btn: " transition-all duration-200 h-12 w-12 flex items-center justify-center relative",
}

const Header = () => {



const cartItems = useSelector((state) => state.cart)
.map((cartItem) => cartItem.quantity)

const navigate = useNavigate();

const logoutUserId = () => {
  localStorage.removeItem("userId")

}
  
  return (
    <header className={styles.header}>
      <Container>
     <div className='flex justify-between'>

      <div className={styles.logo}>
        <Link to="">
          <img src={Logo} alt="logo" className="h-full w-full" />
        </Link>
      </div>
      <nav>
        <ul className={styles.ul}>
          <Link to="/">
            <li className={styles.li}>
              Home<span className={styles.span}></span>
            </li>
          </Link>
          <Link to="/products">
            <li className={styles.li}>
              Categories<span className={styles.span}></span>
            </li>
          </Link>
          <Link to="/about">
            <li className={styles.li}>
              About<span className={styles.span}></span>
            </li>
          </Link>
          <Link to="/contact">
            <li  className={styles.li}>
              Contact<span className={styles.span}></span>
            </li>
          </Link>
        </ul>
      </nav>

      <div className={styles.btnGroup}>

      <div className='relative w-[264px] border border-[#E6E7E8] rounded-[6px]'>
  <input 

    type="text" 
    placeholder='Search products' 
    className='w-full py-[10px] pl-[36px] rounded-[6px] outline-none placeholder:text-[14px]'  
    />
  <button className='absolute left-[10px] top-1/2 transform -translate-y-1/2'>
    <img src={Search} alt="search" className="w-6" />
  </button>
</div>

        <Link to="/cart-page">
          <button className={styles.btn}>
            <img src={Cart} alt="cart" className="w-5" />
           {cartItems?.length > 0 && <span className="h-3 w-3 rounded-full bg-yellow-400 text-black flex 
            items-center justify-center text-xs font-black absolute -right-0">{cartItems.reduce((sum, number) => sum + +number)}</span>}
          </button>
        </Link>

        <Link to="/profile">
          <button onClick={logoutUserId} className={styles.btn}>
            <img src={Profile} alt="profile" className="w-5" />
          </button>
        </Link>


      </div>
      </div>
  </Container>
    </header>
  )
}

export default Header
