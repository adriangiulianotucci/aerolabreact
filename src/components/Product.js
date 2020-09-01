import React, { useState, useEffect } from 'react';
import './Product.css'

function Product(props) { 
  
    return (
        <div className='product'>
          <a href="#">{props.product.cost}</a>
          <img width="100%" src={props.product.img.url} alt="Card image cap" />
          <hr></hr>
          <p>{props.product.category}</p>
          <p>{props.product.name}</p>
        </div>
        ) 
  }

  export default Product