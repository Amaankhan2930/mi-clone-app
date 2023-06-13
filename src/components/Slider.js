import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = ({start}) => {
    return (
    
            <Carousel >
            {start.map((item)=>(
                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    src={item}
                    alt="first slide"
                     />
                         <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
                   </Carousel.Item>
            ))}
            </Carousel>
        
    )
}

export default Slider