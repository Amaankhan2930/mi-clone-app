import React from 'react'
import Hotitemcard from './Hotitemcard.js'
import '../style/hotitemaccessories.css'
const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifestyle, lifestyleCover, mobileAccessories, mobileAccessoriesCover }) => {
    return (
        <div className='hotaccessories'>
            <div className='firstimage'>
                <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="first " />
            </div>
            {/* @ 2slide  */}
            <div className='lastimage'>
                {music && music.map((item, index) => (
                    <Hotitemcard key={item.image} price={item.price} name={item.name} image={item.image} index={index} />
                ))}
            </div>

            <div className='lastimage'>
                {smartDevice && smartDevice.map((item, index) => (
                    <Hotitemcard key={item.image} price={item.price} name={item.name} image={item.image} index={index} />
                ))}

            </div>

            <div className='lastimage'>
                {home && home.map((item, index) => (
                    <Hotitemcard key={item.image} price={item.price} name={item.name} image={item.image} index={index} />
                ))}
            </div>

            <div className='lastimage'>
                {lifestyle && lifestyle.map((item, index) => (
                    <Hotitemcard key={item.image} price={item.price} name={item.name} image={item.image} index={index} />
                ))}
            </div>

            <div className='lastimage'>
                {mobileAccessories && mobileAccessories.map((item, index) => (
                    <Hotitemcard key={item.image} price={item.price} name={item.name} image={item.image} index={index} />
                ))}
            </div>
        </div>
    )
}

export default HotAccessories