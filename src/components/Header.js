import React from 'react'
import '../style/header.css'
const Header = ({text}) => {
  return (
    <div className='headersection'>

    <div></div>
        <p>{text}</p>
        <div></div>
    </div>
  )
}

export default Header