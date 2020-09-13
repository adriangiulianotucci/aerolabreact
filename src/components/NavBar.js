import React, { useState, useEffect } from 'react';
import './NavBar.css'

function NavBar(props) { 
  
    return (
        <div className='navBar'>
            <div>
                <div className='navItems'>16 of 32 products</div>
                <div>Sort by</div>
                <div className='navRecent'>Most Recent</div>
                <div className='navLowestPrice'>Lowest Price</div>
                <div className='navHighestPrice'>Highest Price</div>
            </div>
            <div>
                <div className='navArrow'>Flecha</div>
            </div>
        </div>
    ) 
}

  export default NavBar