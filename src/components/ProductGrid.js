import React, { useState, useEffect , useContext } from 'react';
import Product from './Product'
import './ProductGrid.css'
import api from '../utils/api'
import NavBar from './NavBar'
import Footer from './Footer'

function Products(props) {
  const [products, setProducts] = useState([])
  const [productPages, setPages] = useState([])
  const [order, setOrder] = useState(
    {
      order : 'recent' ,
      page: 0 ,
      results: 0,
      totalPages: 0,
      productsPerPage : 16,
    }
  )

  const divideProducts = async function (array) {
    let myArray = await array
    let arrayLength = myArray.length;
    let productsArray = [];
    
    for (let index = 0; index < arrayLength; index += order.productsPerPage) {
        let tempArray = myArray.slice(index, index+order.productsPerPage);
        productsArray.push(tempArray);
    }

    setPages(productsArray)

    let newOrder = Object.assign({}, order)
    newOrder.totalPages = productsArray.length
    setOrder(newOrder)
    console.log(newOrder)
  }

  useEffect(() => {
    async function req() {
      let products = await api.getProducts()
      setProducts(products)

      let newOrder = Object.assign({}, order)
      newOrder.results = await products.length
      setOrder(newOrder)

      divideProducts(products)
    }
    req()
  },[]);

  const alterPage = function(direction){
    switch (direction) {
      case 'left':
        console.log('-1')
        break;
    
      case 'right':
        console.log('+1')
        break;
    }
  }

  if (productPages.length === 0) {
    return (
      <h1>Loading...</h1>
    );
  }

    return (
      <div>
        <NavBar alterPage={alterPage} order={order}></NavBar>
        <div className='container'>
          {productPages[order.page].map((elem)=> <Product key={elem._id} product={elem}></Product>)}
        </div>
        <Footer order={order}></Footer>
      </div>
    ) 
}

export default Products;
