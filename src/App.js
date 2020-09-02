import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductGrid from './components/ProductGrid';
import imgPanel from './header-x2.png'

function App() {
  return (
    <div>
        <header>Header</header>
        <img width="100%" src={imgPanel} alt="Card image cap" />
        <div className='navBar'>
          <div>
            <div className='navButton'>16 of 32 products</div>
            <div className='navButton'>Sort by</div>
            <div className='navButton'>Most Recent</div>
            <div className='navButton'>Lowest Price</div>
            <div className='navButton'>Highest Price</div>
          </div>
          <div>
            <div className='navArrow'>Flecha</div>
          </div>
        </div>
        <div>
          <ProductGrid> </ProductGrid>
        </div>
      </div>
  );
}

export default App;
