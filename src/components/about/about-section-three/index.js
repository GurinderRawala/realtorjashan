import React from "react";
import { data } from "./data";
import "../../contact/contact-styles.css"
const backImg = {backgroundColor: 'goldenrod', zIndex: -1, position: 'relative', minHeight: 850}
const AboutSectionThree = () =>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 bg-dark" style={{zIndex: -1, position: 'relative'}}></div>
                <div className="col-sm-9 backimg" style={backImg}></div>
            </div>
            <div className="container" style={{ backgroundColor:'#f1f1f1', marginTop: -750, zIndex: 2}}>
                <div className="row row-reverse-phone">
                    <div className="col-sm-7 pt-3 my-3" style={{paddingLeft: 25}}>
                        <div className="alfa-heading">{data.heading}</div>
                        <p data-aos="fade-right" className="my-3">{data.content.paragraphOne}</p>
                        <p data-aos="fade-right" className="my-3">{data.content.paragraphTwo}</p>
                        <p data-aos="fade-right" className="my-3">{data.content.paragraphThree}</p>
                    </div>
                    <div data-aos="fade-up" className="col-sm-5" style={{padding: 20}}>
                        <img src={data.img} className="img-fluid" alt="im-g"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSectionThree