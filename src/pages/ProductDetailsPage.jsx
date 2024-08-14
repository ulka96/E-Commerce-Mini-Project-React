import React from 'react'

import Container from '../Components/Container'
// Components
import HeaderFilter from '../Components/HeaderFilter'

import ProductImage from '../Components/ProductImage'
import ProductFilter from '../Components/ProductFilter'
import DetailsAndReviews from '../Components/DetailsAndReviews'
import SimilarProducts from '../Components/SimilarProducts'

import FooterWithSubscribe from '../Components/FooterWithSubscribe'
import FooterSection2 from '../Components/FooterSection2'

// Hook
import { useParams } from 'react-router-dom'
import { useEffect , useState} from 'react'

const ProductDetailsPage = () => {

  const [product, setProduct] = useState({})  

  // Product Id
  const {id} = useParams()  
  
  // Fetch Product
  const getProduct = async() => {
  const response = await fetch (`http://localhost:3000/products/${id}`);
  const data = await response.json()
  
  setProduct(data)
  
  }
  
  useEffect(() => {
    getProduct()
  }, [])
  
  

  return (
    <div>
        <Container>
     <HeaderFilter/>
    
     <div className=" flex gap-[120px]">
     <ProductImage product = {product}/>
     <ProductFilter product = {product} />
     </div>

    <DetailsAndReviews/>
    <SimilarProducts product = {product} />


     </Container>
     <FooterWithSubscribe/>
    <FooterSection2/>

    </div>
  )
}

export default ProductDetailsPage
