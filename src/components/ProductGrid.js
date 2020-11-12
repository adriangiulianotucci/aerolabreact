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
      orderBy : 'recent' ,
      page: 0 ,
      results: 0,
      totalPages: 0,
      productsPerPage : 16,
    }
  )

  const divideProducts = async function (array, prevState) {
    let myArray = await array
    let arrayLength = myArray.length;
    let productsArray = [];
    
    for (let index = 0; index < arrayLength; index += order.productsPerPage) {
        let tempArray = myArray.slice(index, index+order.productsPerPage);
        productsArray.push(tempArray);
    }

    setPages(productsArray)

    let newOrder = prevState
    newOrder.totalPages = productsArray.length
    setOrder(newOrder)
  }

  useEffect(() => {
    async function req() {
      let products = await api.getProducts()
      setProducts(products)

      let newOrder = Object.assign({}, order)
      newOrder.results = await products.length

      divideProducts(products, newOrder)
    }
    req()
  },[]);

  const alterPage = function(direction){
    switch (direction) {
      case 'left':
        if(order.page>0) {
          let newOrder = Object.assign({}, order)
          newOrder.page--
          setOrder(newOrder)
        }
        break;
    
      case 'right':
        if(order.page<order.totalPages) {
          let newOrder = Object.assign({}, order)
          newOrder.page++
          setOrder(newOrder)
          console.log(order.page, order.totalPages,newOrder)
        }
        break;
      
      default:
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
