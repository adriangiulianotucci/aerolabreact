import React, { useState, useEffect } from 'react';
import './NavBar.css'

function NavBar(props) { 
  
    return (
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
    ) 
}

  export default NavBar