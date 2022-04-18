import React from 'react';
import { HiOutlineMail, HiOfficeBuilding } from 'react-icons/hi'
import { FaPhoneAlt } from 'react-icons/fa'
const ContactInfo = ({info}) =>{
    return(
        <div data-aos="fade-left" className='app-statement' style={{ marginTop: 15}}>
            <p style={{padding: 15}}>
            <b style={{color: 'goldenrod'}}><FaPhoneAlt size={24}/></b> {info.phone}<br/>
            <b style={{color: 'goldenrod'}}><HiOutlineMail size={24}/></b> {info.email}<br/>
            <b style={{color: 'goldenrod'}}><HiOfficeBuilding size={24}/></b> {info.address}<br/>
            </p>
        </div>
    )
}
export default ContactInfo