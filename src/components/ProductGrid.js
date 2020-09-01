import React, { useState, useEffect } from 'react';
import Product from './Product'
import './ProductGrid.css'

const url = "https://coding-challenge-api.aerolab.co/products"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWZhMzk5OTc1NzJiODAwNmRlNzUzMTUiLCJpYXQiOjE1OTM0NTcwNDl9.A94xfvXPzaSLyGxl1NIQ7hxl3WiER2y3EDxXabxOOFg"

const request = { method: 'GET',
               headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Authorization":"Bearer " + token
              },
               mode: 'cors',
               cache: 'default' };


function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function req() {
      const response = await fetch(url,request)
      const json = await response.json()
      setProducts(json)
    }
    req()
  },[]);


  if (!products) {
    return (
      <h1>Loading</h1>
    );
  }

  return (
    <div className='container'>
      {products.map((elem)=> <div key={elem._id}><Product product={elem}></Product></div>)}
    </div>
  ) 
}

export default Products;
