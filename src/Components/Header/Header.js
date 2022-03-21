import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='nav'>
            <div>
                <img src={logo} alt="" srcset="" />
            </div>
            <div className='nav-item'>
                <a href="#home">Home</a>
                <a href="#home">Shop</a>
                <a href="#home">Order</a>
                <a href="#home">Inventory</a>
            </div>
            
        </div>
    );
};

export default Header;