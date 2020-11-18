import React, { useContext } from 'react';
import './Header.css'
import { UserContext } from '../context/userContext'

function Header() {

    const { user } = useContext(UserContext)
    return (
        <header>
            <div className='logo'>
                <img src={'/assets/aerolab-logo.svg'} alt='logo'></img>
            </div>
            <div className='userData'>
                <div className='userName'>{user.name}</div>
                <div className='userBalance'>
                    {user.points}
                    <img src={'/assets/icons/coin.svg'} className='coin' alt='coinImg'></img>
                </div>
            </div>
        </header>
    )
}

export default Header