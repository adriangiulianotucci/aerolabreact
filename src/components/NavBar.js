import React from 'react';
import './NavBar.css'

function NavBar(props) { 
    let alterPage = props.alterPage
    let alterOrder = props.alterOrder

    return (
            <div className='navBar'>
                <div className='navData'>
                    <div className='navItems'>{props.productsPerPage} of {props.totalResults} products</div>
                    <div className='sortBy'>Sort by:</div>
                    <div className='navSort' onClick={() => {alterOrder('recent')}}>Most Recent</div>
                    <div className='navSort' onClick={() => {alterOrder('lowest')}}>Lowest Price</div>
                    <div className='navSort' onClick={() => {alterOrder('highest')}}>Highest Price</div>
                </div>
                <div className='navArrow'>
                    <img src={'/assets/icons/arrow-left.svg'} id='leftArrow' onClick={() => {alterPage('left')}}></img>
                    <img src={'/assets/icons/arrow-right.svg'} id='rightArrow' onClick={() => {alterPage('right')}}></img>
                </div>
        </div>
    ) 
}

  export default NavBar
