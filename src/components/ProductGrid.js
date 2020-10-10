import React, { useState, useEffect } from 'react';
import Product from './Product'
import './ProductGrid.css'
import api from '../utils/api'

function Products(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function req() {
      api.redeemProduct('5a0b35c1734d1d08bf7084c3')
      let products = await api.getProducts()
      setProducts(products)
    }
    req()
  },[]);


  if (!products) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <div className='container'>
      {products.map((elem)=> <Product key={elem._id} product={elem}></Product>)}
    </div>
  ) 
}

export default Products;
