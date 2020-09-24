import React, { useState, useEffect , useRef } from 'react';
import './Product.css'

function ProductPrice(props) { 
    return (
          <div className='price' >
            <img src={'/assets/icons/buy-white.svg'} className='buyIcon'/>
            <h1>{props.price}</h1>
          </div>
        ) 
}


function Product(props) { 

  const [hovered, setHovered] = useState(false)

    return (
        <div className='product' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          {hovered && <ProductPrice price={props.product.cost}></ProductPrice>}
          <div className='upperCard'>
            <img width="100%" src={props.product.img.url} alt="Card image cap" className='productImg'/>
            {!hovered && <img src={'/assets/icons/buy-blue.svg'} className='buyIcon'/>}         
          </div>
          <div className='lowerCard'>
            <h2>{props.product.category}</h2>
            <h1>{props.product.name}</h1>
          </div>
        </div>
        ) 
}

  export default Product