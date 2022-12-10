import React from "react";
import IntroHeading from "./intro-heading";
import IntroImage from "./intro-image";
import IntroContainer from "./intro-container";
import { Content } from "./introduction-content";
import Logo from "../logo";
const Introduction = () =>{
    const { backgroundImage, title, intro, image, sales, rankedBy } = Content;
    return(
        <IntroContainer>
            <div data-aos="fade-right" className="col-sm-6 col-lg-5">
                <Logo logoStyle={{fontSize: 40}}/>
                <br /><br />
                <IntroImage image={image}/>
            </div>
            <div data-aos="fade-up" className="col-sm-6 col-lg-7">
                <IntroHeading 
                    backgroundImage={backgroundImage}
                    title={title}
                />
                <p>{intro}</p>
                <br />
                <h3>{sales.heading}</h3>
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <p style={{fontSize: 60, fontWeight: '900'}}>{sales.money}</p>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <p style={{fontSize: 22, fontWeight: '900'}}>{sales.details.title}<br />{sales.details.body}</p>
                    </div>
                </div>
                <br />
                <hr style={{height: 3, color: 'white'}}/>
                <br />
                <p style={{fontSize: 22, fontWeight: '600'}}>{rankedBy.nyc}</p>
                <p style={{color: '#ffffff55', lineHeight: 0.5}}>{rankedBy.footer}</p>
                <br />
                <p style={{fontSize: 22, fontWeight: '600'}}>{rankedBy.tdot}</p>
                <p style={{color: '#ffffff55', lineHeight: 0.5}}>{rankedBy.footer}</p>
                <div className="text-end">
                    <button onClick={() => window.open(`https://www.c21.ca/directory/offices/century-21-royaltors-realty-inc-brokerage`, '_blank')}>Visit Royalters Brokerage</button>
                </div>
            </div>
        </IntroContainer>
    )
}
export default Introduction