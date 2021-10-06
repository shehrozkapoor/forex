import React from 'react';
import { Dropdown} from 'react-bootstrap';
import Hamburger from './../../assets/Home/hamburger.svg';

function Cdropdown() {
    return (
        <>
            <Dropdown className="dropdown-burger">
            <Dropdown.Toggle id="dropdown-basic" className="dropdown-toggle">
                <img src={Hamburger} alt="" className="burger-img"/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Username</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default Cdropdown;
