import React from "react";
import { data } from "./data";
import "../../contact/contact-styles.css"
const containerStyle = { backgroundImage: `url('${data.backgroundImg}')`, position: 'relative' }
const AboutSectionTwo = () =>{
    return(
        <div className="container-fluid backimg" style={containerStyle}>
        <div className="shade" style={{zIndex: 1, backgroundColor: '#fff'}}></div>
        <div className="row row-reverse-phone" style={{zIndex: 2, position: 'relative'}}>
            <div className="col-lg-4 col-sm-12">
                <img src={data.img} alt="sec-im" className="img-fluid"/>
            </div>
            <div className="col-lg-8 col-sm-12 pt-5">
                <div className="alfa-heading">
                <p>{data.heading.partOne}</p>
                <p>{data.heading.partTwo}</p>
                </div>
                <p className="my-3">{data.content.paragraphOne}</p>
                <p className="my-3">{data.content.paragraphTwo}</p>
                <p className="my-3">{data.content.paragraphThree}</p>
            </div>
        </div>
        </div>
    )
}
export default AboutSectionTwo