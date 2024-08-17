import React from 'react'

// Components
import Container from '../Components/Container'
import HeaderFilter from '../Components/HeaderFilter'

import FooterSection2 from '../Components/FooterSection2'

import CartProduct from '../Components/CartProduct'
import OrderSummary from '../Components/OrderSummary'

const CartPage = () => {
  return (
   
    <div>
    <HeaderFilter/>
    <Container>
    
    <div className='flex flex-row '>

    <CartProduct/>
    <OrderSummary/>

 
    </div>

    </Container>
    <FooterSection2/>
    </div>

  )
}

export default CartPage