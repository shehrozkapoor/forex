import React from 'react'
import { Button } from 'react-bootstrap';
import HeaderImg from './../../assets/Home/building.png';
import Logo from './../../assets/Home/logo.svg';

import Cdropdown from './Cdropdown';
function BackgroundImage() {
return (
<div className="header-div">
    <img src={HeaderImg} alt="header-img" className="header-img" />
    <div className="inner-header-div">
        <img src={Logo} alt="logo" className="Logo" />
        <div className="navbar-items">
            <div className="buttons d-flex flex-wrap justify-content-end">
                <Button className="button login-btn">Login</Button>
                <Cdropdown></Cdropdown>
            </div>
        </div>
        <div className="header-texts-buttons">
            <h1 className="header-text">Innovate power tools that aling with your goals</h1>
            <p className="header-p-text">Trading in Forex, Metals, Indexes, Energies, Stocks,ETFs and Cryptocurrencies
            </p>
            <Button className="button" style={{width:'200px',minWidth:'auto'}}>OPEN ACCOUNT</Button>
        </div>
    </div>
</div>
)
}

export default BackgroundImage;
