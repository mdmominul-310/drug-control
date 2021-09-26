import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
           <div className="logo">
            <img src={logo} alt="" />
           </div>
           <div className="header-text">
               <h2>Drug Control Association</h2>
               <p><small>Don't say drugs ,Make healthy a life</small></p>
               <h2>Total budget <span className="uncommon-color">100 Million Taka</span></h2>
           </div>
        </div>
    );
};

export default Header;