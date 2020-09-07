import React from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import NavBar from './components/NavBar'
import imgPanel from './header-x2.png'

function App() {
  return (
    <div>
        <header>Header</header>
        <img width="100%" src={imgPanel} alt="Card image cap" />
        <NavBar></NavBar>
        <ProductGrid> </ProductGrid>
      </div>
  );
}

export default App;
