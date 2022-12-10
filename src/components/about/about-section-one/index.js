import React from "react";
import ContactImg from "../../contact/contact-img";
import Heading from "../../contact/heading";
import { data } from "./data"
import '../../contact/contact-styles.css'
const AboutSectionOne = () =>{
    return(
        <div className="row row-reverse-phone">
            <div className="col-lg-7 col-sm-12 pt-5 contact-main">
                <div style={{width: 300}}>
                    <Heading data={data} />
                </div>
                <div data-aos="fade-right" className="app-statement my-5">
                    <p>
                        <b className="my-1">{data.content.bold}</b>
                        <br />
                        <br/>
                        {data.content.paragraphOne}
                        <br />
                        <br />
                        {data.content.paragraphTwo}
                    </p>
                </div>
            </div>
            <ContactImg img={data.img}/>
        </div>
    )
}
export default AboutSectionOne