import React from "react";
import { FaPhoneAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import SocialMedia from "../social-media";
import footerStyle from "./footer-style";
const ContactUs = ({title, phone, email}) =>{
    return(
        <>
            <h1>{title}</h1>
            <FaPhoneAlt /> &nbsp;{phone} <br />
            <HiOutlineMail /> &nbsp;{email} <br />
            <SocialMedia 
                socialStyle={footerStyle.socialLink}
                socialForFooter
            />
        </>
    )
}
export default ContactUs