import React from 'react'

import Container from '../Components/Container'
import HeaderFilter from '../Components/HeaderFilter'
import FooterWithSubscribe from '../Components/FooterWithSubscribe'
import FooterSection2 from '../Components/FooterSection2'

import FilterListing from '../Components/FilterListing'
import Products from '../Components/Products'



const ListingPage = () => {


  return (
    <div>
    <Container>
    <HeaderFilter/>
 

<div className='flex flex-row gap-[29px]'>



<FilterListing/>
<Products/>
 
</div>




</Container>
 <FooterWithSubscribe/>
<FooterSection2/>

</div>
  )
}

export default ListingPage