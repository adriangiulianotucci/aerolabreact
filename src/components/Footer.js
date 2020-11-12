import React, { useState, useEffect , useContext } from 'react';
import './Footer.css'
import { UserContext } from '../context/userContext'

function Footer(props) { 
    const order = props.order
    return (
            <div className='footer'>
                {order.productsPerPage} of {order.results} products
            </div>
    ) 
}

  export default Footer