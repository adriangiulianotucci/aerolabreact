import React, { useState, useEffect , useContext } from 'react';
import './NavBar.css'
import { UserContext } from '../context/userContext'

function NavBar(props) { 
    const { order , setOrder } = useContext(UserContext)

    return (
            <div className='navBar'>
                <div className='navData'>
                    <div className='navItems'>16 of {order.results} products</div>
                    <div className='sortBy'>Sort by:</div>
                    <div className='navSort'>Most Recent</div>
                    <div className='navSort'>Lowest Price</div>
                    <div className='navSort'>Highest Price</div>
                </div>
                <div className='navArrow'>
                    <img src={'/assets/icons/arrow-left.svg'} id='leftArrow'></img>
                    <img src={'/assets/icons/arrow-right.svg'} id='rightArrow'></img>
                </div>
        </div>
    ) 
}

  export default NavBar