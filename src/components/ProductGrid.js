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

  const alterOrder = async function(order){
    switch (order) {
      case 'recent':
        let orderedRecentArray = await divideProducts(products)
        setPages(orderedRecentArray)
        break;
      case 'lowest':
        let lowestArray = [...products].sort(function (a, b) {
          if (a.cost > b.cost) {
            return 1;
          }
          if (a.cost < b.cost) {
            return -1;
          }
          return 0;
        });
        let orderedLowestArray = await divideProducts(lowestArray)
        setPages(orderedLowestArray)
        break;
      
      case 'highest':
        let highestArray = [...products].sort(function (a, b) {
          if (a.cost < b.cost) {
            return 1;
          }
          if (a.cost > b.cost) {
            return -1;
          }
          return 0;
        });
        let orderedHighestArray = await divideProducts(highestArray)
        setPages(orderedHighestArray)
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
        {totalResults > 0 && totalPages >0 && <NavBar alterPage={alterPage} alterOrder={alterOrder} productsPerPage={productsPerPage} totalResults={totalResults}></NavBar>}
        <div className='container'>
          {productPages[currentPage].map((elem)=> <Product key={elem._id} product={elem}></Product>)}
        </div>
        {totalResults > 0 && <Footer productsPerPage={productsPerPage} totalResults={totalResults}></Footer>}
      </div>
    ) 
}

export default Products;
