import React , { useState , useEffect } from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import NavBar from './components/NavBar'
import Header from './components/Header'
import {UserProvider} from './context/context'

function App() {

  return (
    <div className='body'>
        <UserProvider>
          <Header></Header>
          <img width="100%" src={'/assets/header-x1.png'} alt="Card image cap" />
          <NavBar></NavBar>
          <ProductGrid></ProductGrid>
        </UserProvider>
    </div>
  );
}

export default App;
