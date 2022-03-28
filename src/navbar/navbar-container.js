import React, {useState} from 'react';
import { FaBars }  from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
const NavbarContainer = ({children}) =>{
    const[show, setShow] = useState(false)
    return(
      <div className='row'>
          <div className='col-sm-12 App-row-flex theme shadow' style={{justifyContent: 'space-between'}}>
              <h3>REALTOR JASHAN</h3>
              <div className='Mobile-link'>
              <button className='btn btn-Link' onClick={() => setShow(!show)}>
                  {
                      show?<AiOutlineClose color='#fff' size={24} />:<FaBars color='#fff' size={24} />
                  }
              </button>
              </div>
              <div className='App-link Lg-link'>{ children }</div>
          </div>
          { show?<div className='App-link theme text-center'>{ children }</div>: null }
      </div>
    )
}

export default NavbarContainer