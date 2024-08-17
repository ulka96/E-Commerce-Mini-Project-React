import React from 'react'
import { useLocation } from 'react-router-dom'

import Container from './Container'

// Images
import Logo from "../images/Logo.png"
import SocialIcons from "../images/Social Icons.png"
import Amex from "../images/Amex.png"
import Mastercard from "../images/Mastercard.png"
import Visa from "../images/Visa.png"

const FooterSection2 = () => {
const {pathname} = useLocation();    

  return (
<div className={pathname === "/cart-page" || pathname === "/sign-up" || pathname === "/sign-in" ? 'bg-[#F6F6F6] py-8 pl-[40px]' : 'bg-white'}>
<Container>
<div className='grid grid-cols-5 grid-rows-1'>
{/* 1st */}
<div>
    <div>
        <img src={Logo} alt="logo" className='h-11 w-[168px]'/>
    </div>
    <p className='text-[14px] font-normal text-[#5C5F6A] w-[272px] leading-6 mt-3 mb-8'>DevCut is a YouTube channel for practical project-based learning.</p>
    <div>
        <img src={SocialIcons} alt="socialicons" className='w-[120px] h-6' />
    </div>
</div>

{/* 2nd, 3,4,5 */}
<div className='ml-[98px]'>
<p className='text-[14px] font-medium text-[#878A92] mb-10'>SUPPORT</p>
<ul className='flex flex-col gap-4 text-[14px] font-medium text-[#5C5F6A]'>
    <li>FAQ</li>
    <li>Terms of use</li>
    <li>Privacy Policy</li>
</ul>
</div>


<div className='mx-[72px]'>
<p className='text-[14px] font-medium text-[#878A92] mb-10'>COMPANY</p>
<ul className='flex flex-col gap-4 text-[14px] font-medium text-[#5C5F6A]'>
    <li>About us</li>
    <li>Contact</li>
    <li>Careers</li>
</ul>
</div>


<div className='mr-[159px]'>
<p className='text-[14px] font-medium text-[#878A92] mb-10'>SHOP</p>
<ul className='flex flex-col gap-4 text-[14px] font-medium text-[#5C5F6A]'>
    <li>My Account</li>
    <li>Checkout</li>
    <li>Cart</li>
</ul>
</div>


<div >
<p className='text-[14px] font-medium text-[#878A92] mb-10'>ACCEPTED PAYMENTS</p>
<ul className='flex  gap-4 '>
    <li><img src={Mastercard} alt="Mastercard" className='w-[30px] h-8' /></li>
    <li><img src={Amex} alt="amex" className='w-[56px] h-8' /></li>
    <li><img src={Visa} alt="Visa" className='w-[42px] h-8' /></li>
</ul>
</div>
</div>

<div className='border border-[#F6F6F6] mt-[104px]'></div>

<p className='my-[27px] flex justify-center text-[14px] text-[#5C5F6A]'>© 2023 DevCut. All rights reserved.</p>
</Container>
</div>
    
  )
}

export default FooterSection2