import React from 'react'
import {Link} from 'react-router-dom'
import '../style/hotaccessoriesmenu.css'
const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className="Hotaccessorieslink" to="/music">Music Store</Link>
        <Link className="Hotaccessorieslink" to="/smartdevice">Smart Devices</Link>
        <Link className="Hotaccessorieslink" to="/home">Home</Link>
        <Link className="Hotaccessorieslink" to="/lifestyle">Lifestyle</Link>
        <Link className="Hotaccessorieslink" to="mobileaccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu