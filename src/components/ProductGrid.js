import React, { useState, useEffect , useContext } from 'react';
import Product from './Product'
import './ProductGrid.css'
import api from '../utils/api'
import { UserContext } from '../context/userContext'

function Products(props) {
  const { order , setOrder } = useContext(UserContext)
  const [products, setProducts] = useState([])
  const [productPages, setPages] = useState([])

  useEffect(() => {
    async function req() {
      let products = await api.getProducts()
      setProducts(products)
      let newOrder = Object.assign({}, order)
      newOrder.results = products.length
      setOrder(newOrder)
    }
    req()
  },[]);

  if (products.length === 0) {
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
