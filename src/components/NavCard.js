import React from 'react'
import '../style/Navcard.css'
const NavCard = ({image,name,price,index}) => {
  return (
    <div className='Navcard'>
        <img src={image} alt={`${index} phone`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default NavCard