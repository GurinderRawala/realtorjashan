import React from 'react';
const MapEmbed = ({mapUrl}) =>{
    return(
        <iframe data-aos="fade-up" src={mapUrl}
        className="contact-spacer"
        style={{width: '100%', height: 350, border: 0}}
        allowFullScreen="" loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title='office-loc'
        ></iframe>
    )
}
export default MapEmbed
