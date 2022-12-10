import React from 'react'
import NavbarContainer from "./navbar-container";
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return(
        <NavbarContainer
            title={'JASHAN GREWAL'}
        >
            <Link to="/">HOME</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/about">ABOUT</Link>
        </NavbarContainer>
    )
}

export default Navbar