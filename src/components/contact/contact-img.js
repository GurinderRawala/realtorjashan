import React from "react";
import { s } from "./contact-styles";
const ContactImg = ({img}) =>{
    return(
    <div className="col-sm-12 col-lg-5" style={{ padding: 0 }}>
        <div style={{position: 'relative', zIndex: 1}}>
        <div data-aos="fade-up" 
        className="contact-img backimg shade" 
        style={{ backgroundImage: `url(${img})`, ...s.domenstionImg, zIndex: -1 }}>
        </div>
        <div data-aos="fade-up" 
            className="contact-img backimg shade" 
            style={{ backgroundImage: `url(${img})`, ...s.domenstionImg , zIndex: 1, marginLeft: 15, marginTop: 15, opacity: 1, backgroundColor: 'transparent' }}>
        </div>
        </div>
    </div>
    )
}
export default ContactImg