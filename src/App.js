import React from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import Header from './components/Header'
import { UserProvider } from './context/userContext'

function App() {
  return (
    <div className='body'>
        <UserProvider>
          <Header></Header>
          <img width="100%" src={'/assets/header-x1.png'} alt="banner"/>
          <ProductGrid></ProductGrid>
        </UserProvider>
    </div>
  );
}

export default App;
