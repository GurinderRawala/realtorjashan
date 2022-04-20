import React from "react";
import { data } from "./data";
import "../../contact/contact-styles.css"
import ContactImg from "../../contact/contact-img";
const AboutSectionFour = () =>{
    return(
        <div className="container-fluid my-5">
            <div className="row row-reverse-phone">
                    <ContactImg img={data.img}/>
                <div className="col-sm-12 col-lg-6 pt-5 my-2" style={{paddingLeft: 25, position: 'relative', zIndex: 2}}>
                <div className="alfa-heading">{data.heading}</div>
                        <p data-aos="fade-right" className="my-3">{data.content.paragraphOne}</p>
                        <p data-aos="fade-right" className="my-3">{data.content.paragraphTwo}</p>
                        <p data-aos="fade-right" className="my-3">{data.content.paragraphThree}</p>
                </div>
                <div className="col-lg-1 bg-dark"></div>
            </div>
        </div>
    )
}
export default AboutSectionFour