import React from "react";
import { data } from "./data";
import "../../contact/contact-styles.css"

const AboutSectionFive = () =>{
    return(
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 pt-5 my-2" style={{paddingLeft: 25}}>
                <div className="alfa-heading">{data.heading}</div>
                        <p data-aos="fade-right" className="my-3">{data.content.paragraphOne}</p>
                        <p data-aos="fade-right" className="my-3">{data.content.paragraphTwo}</p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img data-aos="fade-up" src={data.img} alt="i-m-g" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}
export default AboutSectionFive