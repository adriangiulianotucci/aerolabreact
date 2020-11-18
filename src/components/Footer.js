import React from 'react';
import './Footer.css'

function Footer(props) {
    return (
        <div className='footer'>
            {props.productsPerPage} of {props.totalResults} products
        </div>
    )
}

export default Footer