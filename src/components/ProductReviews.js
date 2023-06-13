import React from 'react'
import Productitem from '../components/Productitem.js'
import '../style/ProductReviews.css'
const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='productreviews'>

        {ProductReviews.map((item,index)=>(
            <Productitem key={item.image} image={item.image} price={item.price} review={item.review} name={item.name} index={index}  />
        ))}
    </div>
  )
}

export default ProductReviews