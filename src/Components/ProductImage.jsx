import React from 'react'


import TShirt from "../images/T-shirt.png"


const styles = {
    li: "w-2 h-2 text-4xl leading-none text-[#B6B7BC]"
}

const ProductImage = ({product}) => {
  return (
     
    <div className="col-span-5  rounded-lg cursor-pointer relative">
    <img src={product.image} alt="t-shirt" className="w-[534px] h-[574px] relative" />
    
        <ul className='absolute bottom-20 justify-center flex ml-60  '>
            <li className={styles.li}>.</li>
            <li className={styles.li}>.</li>
            <li className={styles.li}>.</li>
            <li className='w-2 h-2 text-4xl leading-none text-[#0E1422]'>.</li>
        </ul>
        
    
  </div>

  )
}

export default ProductImage