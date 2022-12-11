import React, {useEffect, useState} from 'react';
import * as $ from 'jquery';
import { FaBars }  from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import NavBarMobile from './navbar-mobile';
import SocialMedia from '../social-media';
import { Link } from 'react-router-dom';
const NavbarContainer = ({children, title}) =>{
    const[show, setShow] = useState(false)
    const ShowMenu = () =>{
        setShow(!show)
    }

    useEffect(() =>{
        show
            ? $('#mobile-menu').fadeIn() && $('#welcome-buttons').hide()
            : $('#mobile-menu').fadeOut() && $('#welcome-buttons').show()
    }, [show])

    return(
        <div className='row sticky'>
            <div className='col-sm-12 App-row-flex theme' style={{justifyContent: 'space-between'}}>
                <div className='App-row-flex' style={{ justifyContent: 'space-evenly'}}>
                    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                        <h1>{title}</h1>
                    </Link>
                    <div className='App-link Lg-link'>{ children }</div>
                </div>
                <div className='Lg-link'>
                    <SocialMedia />
                </div>
                <div className='Mobile-link'>
                    <button className='btn btn-Link' onClick={ShowMenu} style={{backgroundColor: 'goldenrod'}}>
                        {
                            show?<AiOutlineClose color='#fff' size={24}  />:<FaBars color='#fff' size={24} />
                        }
                    </button>
                </div>
              
            </div>
            <span id='mobile-menu'><NavBarMobile>{children}</NavBarMobile></span>
        </div>
    )
}

export default NavbarContainer