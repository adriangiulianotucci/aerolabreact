import React, { useState, useEffect } from 'react';

function Product(props) { 
  
    return (
        <div>
          <h1>{props.product.name}</h1>
          <h2>{props.product.category}</h2>
          <img width="100%" src={props.product.img.url} alt="Card image cap" />
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#">{props.product.cost}</a>
        </div>
        ) 
  }

  export default Product