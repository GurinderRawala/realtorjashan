import React from 'react';
import Logo from '../logo';
import ContactUs from './contact-us';
import CopyRight from './copyright';
import Explore from './explore';
import FeedBack from './feedback';
import footerData from './footer-data';
const Footer = () =>{
    return(
        <div className='row'>
            <div className='col-sm-12 backimg' 
                style={{position: 'relative', backgroundImage: `url('${footerData.image}')`, paddingBottom: 55, paddingTop: 35}}>
                <br />
                <div className='shade' style={{backgroundColor: '#333'}}></div>
                <div style={{zIndex: 2, padding: 8, position: 'relative', color: '#fff'}}>
                    <div className='row'>
                        <div className='col-sm-2 col-lg-1' style={{marginBottom: 5}}>
                            <Logo logoStyle={{fontSize: 75}}/>
                        </div>
                        <div className='col-sm-4 col-lg-3'>
                            <Explore title={footerData.titleS2} links={footerData.linksS2}/>
                        </div>
                        <div className='col-sm-6 col-lg-3'>
                            <ContactUs title={footerData.titleS3} email={footerData.email} phone={footerData.phone} />
                            <br />
                        </div>
                        <div className='col-sm-12 col-lg-5'>
                            <FeedBack title={footerData.titleS4} questions={footerData.feedBack}/>
                        </div>
                    </div>
                    <br />
                    <hr style={{height: 3, color: 'white'}}/>
                    <CopyRight />
                </div>
            </div>
        </div>
    )
}
export default Footer