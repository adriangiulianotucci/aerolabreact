import React from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import NavBar from './components/NavBar'
import imgPanel from './assets/header-x1.png'
import Header from './components/Header'

function App() {
  return (
    <div className='body'>
        <Header></Header>
        <img width="100%" src={imgPanel} alt="Card image cap" />
        <NavBar></NavBar>
        <ProductGrid></ProductGrid>
    </div>
  );
}

export default App;
