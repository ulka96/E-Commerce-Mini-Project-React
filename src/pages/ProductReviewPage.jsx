import React from 'react'

import Container from '../Components/Container'
// Components
import HeaderFilter from '../Components/HeaderFilter'

import ProductImage from '../Components/ProductImage'
import ProductFilter from '../Components/ProductFilter'
import ReviewsSection from '../Components/ReviewsSection'
import SimilarProducts from '../Components/SimilarProducts'

import FooterWithSubscribe from '../Components/FooterWithSubscribe'
import FooterSection2 from '../Components/FooterSection2'

const ProductReviewPage = () => {
  return (
    <div>
    <Container>
 <HeaderFilter/>

 <div className=" flex gap-[120px]">
 <ProductImage/>
 <ProductFilter/>
 </div>

<ReviewsSection/>
<SimilarProducts/>


 </Container>
 <FooterWithSubscribe/>
<FooterSection2/>

</div>
  )
}

export default ProductReviewPage