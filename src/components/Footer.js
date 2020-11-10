import React, { useState, useEffect , useContext } from 'react';
import './Footer.css'
import { UserContext } from '../context/userContext'

function Footer(props) { 
    const { order } = useContext(UserContext)
    return (
            <div className='footer'>
                16 of {order.results} products
            </div>
    ) 
}

  export default Footer