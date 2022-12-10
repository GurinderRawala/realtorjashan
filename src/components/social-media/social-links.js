import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const SocialLinks = () =>{
    return(
        <>
            <a href="https://www.facebook.com/realtorjashan" >
                <FaFacebook size={24}/>
            </a>
            <a href="https://www.instagram.com/grewal_jashan/?hl=en" >
                <FaInstagram size={24}/>
            </a>
            <a href="https://www.linkedin.com/in/jashan-grewal-09639014" >
                <FaLinkedinIn size={24}/>
            </a>
        </>
    )
}
export default SocialLinks