import React, { useState, useEffect } from 'react';
import './Header.css'
import logo from '../assets/aerolab-logo.svg'

function Header(props) { 
  
    return (
        <header>
            <div className='header'>
                <div className='logo'>
                    <img src={logo}></img>
                </div>
                <div className='userData'>
                    <div>a</div>
                    <div>b</div>
                </div>
            </div>
        </header>
    ) 
}

  export default Header