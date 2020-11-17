import React, { useState, useEffect } from 'react';
import Product from './Product'
import './ProductGrid.css'
import api from '../utils/api'
import NavBar from './NavBar'
import Footer from './Footer'

function Products(props) {
  const [products, setProducts] = useState([])
  const [productPages, setPages] = useState([])
  const [orderBy, setOrder] = useState('recent')
  const [currentPage, setCurrentPage] = useState(0)  
  const [totalResults, setTotalResults] = useState(0)
  const [productsPerPage, setProductsPerPages] = useState(16)
  const [totalPages, setTotalPages] = useState(0)

  const divideProducts = async function (array) {
    let myArray = array
    let arrayLength = myArray.length;
    let productsArray = [];
    
    for (let index = 0; index < arrayLength; index += productsPerPage) {
        let tempArray = myArray.slice(index, index+productsPerPage);
        productsArray.push(tempArray);
    }

    return productsArray
  }

  useEffect(() => {
    async function req() {
      let products = await api.getProducts()
      setProducts(products)

      let productsArray = await divideProducts(products)
      
      setPages(productsArray)
      setTotalResults(products.length)
      setTotalPages(productsArray.length)
    }
    req()
  },[]);

  const alterPage = function(direction){
    switch (direction) {
      case 'left':
        if(currentPage > 0) {
          setCurrentPage(currentPage-1)
        }
        break;
    
      case 'right':
        if(currentPage < totalPages) {
          setCurrentPage(1)
        }
        break;
        
        default:
          break;
    }
  }

  const alterOrder = function(order){
    switch (order) {
      case 'recent':
        setOrder(order)
        break;
    
      case 'lowest':
        setOrder(order)
        break;
      
      case 'highest':
        setOrder(order)
        break;

      default:
        break;
    }
  }
      console.log(orderBy)
      if (productPages.length === 0) {
        return (
          <h1>Loading...</h1>
          );
        }
        console.log(currentPage)
    return (
      <div>
        {totalResults > 0 && totalPages >0 && <NavBar alterPage={alterPage} alterOrder={alterOrder} productsPerPage={productsPerPage} totalResults={totalResults}></NavBar>}
        <div className='container'>
          {productPages[currentPage].map((elem)=> <Product key={elem._id} product={elem}></Product>)}
        </div>
        {totalResults > 0 && <Footer productsPerPage={productsPerPage} totalResults={totalResults}></Footer>}
      </div>
    ) 
}

export default Products;
