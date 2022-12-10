import React from 'react';
import SocialMedia from '../social-media';

const NavBarMobile = ({children}) =>{
    return(
        <div className='dropdown-shade'>
            <div className='dropdown-links theme App-link'>
                { children }
                <SocialMedia />
            </div>
        </div>
    )
}

export default NavBarMobile