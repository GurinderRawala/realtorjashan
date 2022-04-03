import React from 'react'
import NavbarContainer from "./navbar-container";
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return(
        <NavbarContainer
        title={'JASHAN GREWAL.'}
        >
           <Link to="/">HOME</Link>
           <Link to="/contact">CONTACT</Link>
           <Link to="/aboutus">ABOUT US</Link>
           <Link to="/listings">LISTINGS</Link>
        </NavbarContainer>
    )
}

export default Navbar