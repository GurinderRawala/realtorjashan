import React from 'react';
import AboutSectionFive from '../components/about/about-section-five';
import AboutSectionFour from '../components/about/about-section-four';
import AboutSectionOne from '../components/about/about-section-one';
import AboutSectionThree from '../components/about/about-section-three';
import AboutSectionTwo from '../components/about/about-section-two';
const AboutScreen = () =>{
    return(
        <>
            <AboutSectionOne />
            <AboutSectionTwo />
            <AboutSectionThree />
            <AboutSectionFour />
            <AboutSectionFive />
        </>
    )
}
export default AboutScreen