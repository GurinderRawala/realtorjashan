import React from "react";
import ContactForm from "./contact-form";
import ContactImg from "./contact-img";
import ContactInfo from "./contact-info";
import './contact-styles.css';
import { data } from './data';
import Heading from "./heading";
import MapEmbed from "./map-embed";
const Contact = () =>{
    return(
        <div className="row row-reverse-phone">
            <div className="col-sm-12 col-lg-7 pt-5 contact-main">
              <Heading data={data}/>
              <ContactForm />
              <ContactInfo info={data.contactInfo}/>
              <MapEmbed mapUrl={data.mapEmbedUrl}/>
            </div>
          <ContactImg img={data.img} />
        </div>
    )
}
export default Contact