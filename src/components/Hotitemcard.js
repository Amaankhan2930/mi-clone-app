import React from 'react'
import '../style/hotitemcard.css'
const Hotitemcard = ({price,name,image,index}) => {
  return (
    <div className='Hotitemcard'>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default Hotitemcard