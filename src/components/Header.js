import React, { useState, useEffect } from 'react';
import './Header.css'

function Header(props) { 
  
    return (
        <header>
                <div className='logo'>
                    <img src={'/assets/aerolab-logo.svg'}></img>
                </div>
                <div className='userData'>
                    <div className='userName'>{props.user.name}</div>
                    <div className='userBalance'>{props.user.points} <img src={'/assets/icons/coin.svg'} className='coin'></img></div>
                </div>
        </header>
    ) 
}

  export default Header