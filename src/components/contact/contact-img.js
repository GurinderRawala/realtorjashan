import React from "react";

import ResponsiveImage from "../responsive-image"
import { s } from "./contact-styles";
const ContactImg = ({img}) =>{
    return(
        <div className="col-sm-12 col-lg-5" style={{ padding: 0 }}>
            <div style={{position: 'relative', zIndex: 1}}>
                <div data-aos="fade-up" 
                    className="contact-img backimg shade" 
                    style={{ backgroundImage: `url(${img})`, ...s.domenstionImg, zIndex: -1, position: 'relative' }}>
                </div>
                <div data-aos="fade-up" 
                    className="contact-img backimg shade" 
                    style={{ backgroundImage: `url(${img})`, ...s.domenstionImg , marginTop: 15, marginLeft: 15, zIndex: 1, opacity: 1, backgroundColor: '#333', padding: "20px 0px 0px 20px" }}>
                    <ResponsiveImage src={img} />
                </div>
            </div>
        </div>
    )
}
export default ContactImg