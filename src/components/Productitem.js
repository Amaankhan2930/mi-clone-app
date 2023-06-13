import React from 'react'
import '../style/productitem.css'
const Productitem = ({image,index,name,review,price}) => {
  return (
    <div className='product'>
        <img src={image} alt={index} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default Productitem