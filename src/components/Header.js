import React, { useState, useEffect , useContext } from 'react';
import './Header.css'
import { UserContext } from '../context/userContext'

function Header() { 

    const {user} = useContext(UserContext)
    return (
        <header>
                <div className='logo'>
                    <img src={'/assets/aerolab-logo.svg'}></img>
                </div>
                <div className='userData'>
                    <div className='userName'>{user.name}</div>
                    <div className='userBalance'>
                    {user.points}
                    <img src={'/assets/icons/coin.svg'} className='coin'></img>
                    </div>
                </div>
        </header>
    ) 
}

  export default Header