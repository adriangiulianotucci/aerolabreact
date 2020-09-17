import React, { useState, useEffect } from 'react';
import './Product.css'

function Product(props) { 
  
    return (
        <div className='product'>
          <div className='upperCard'>
            <img width="100%" src={props.product.img.url} alt="Card image cap" className='productImg'/>
            <img src={'/assets/icons/buy-blue.svg'} className='buyIcon'/>         
          </div>
          <p>{props.product.category}</p>
          <p>{props.product.name}</p>
        </div>
        ) 
  }

  export default Product