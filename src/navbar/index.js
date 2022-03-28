import React from 'react'
import NavbarContainer from "./navbar-container";

const Navbar = ({ Router }) =>{
    const { Link } = Router
    return(
        <NavbarContainer>
           <Link to="/">Home</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/aboutus">About Us</Link>
           <Link to="/listings">Listings</Link>
        </NavbarContainer>
    )
}

export default Navbar