import React, {useState} from 'react';
import { FaBars }  from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import NavBarMobile from './navbar-mobile';
import SocialMedia from '../social-media';
const NavbarContainer = ({children, title}) =>{
    const[show, setShow] = useState(false)
    return(
      <div className='row'>
          <div className='col-sm-12 App-row-flex theme shadow' style={{justifyContent: 'space-between'}}>
              <div className='App-row-flex' style={{ justifyContent: 'space-evenly'}}>
              <h1>{title}</h1>
              <div className='App-link Lg-link'>{ children }</div>
              </div>
              <div className='Lg-link'>
                <SocialMedia />
              </div>
              <div className='Mobile-link'>
              <button className='btn btn-Link' onClick={() => setShow(!show)} style={{backgroundColor: 'goldenrod'}}>
                  {
                      show?<AiOutlineClose color='#fff' size={24}  />:<FaBars color='#fff' size={24} />
                  }
              </button>
              </div>
              
          </div>
          { show?<NavBarMobile>{children}</NavBarMobile>: null }
      </div>
    )
}

export default NavbarContainer