import React, { useState, useEffect } from 'react';
import './Product.css'

function Product(props) { 
  
    return (
        <div className='product'>
          <div className='upperCard'>
            <img width="100%" src={props.product.img.url} alt="Card image cap" className='productImg'/>
            <img src={'/assets/icons/buy-blue.svg'} className='buyIcon'/>         
          </div>
          <div className='lowerCard'>
            <h2>{props.product.category}</h2>
            <h1>{props.product.name}</h1>
          </div>
        </div>
        ) 
  }

  export default Product