import React from 'react'
import Buttoncom from './Buttoncom'
import logo from '../logo.svg';
import { Navbarstyled } from './styled/Navbar-styled';
export default function Navbar() {
    return (
        <Navbarstyled>
            <img src={logo} alt="logo"></img>
            <Buttoncom text="Try It Free" bg="#fff"padding="0 3rem" box="0 0 10rem gray"/>
        </Navbarstyled>
    );
}
