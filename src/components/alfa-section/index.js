import React from 'react'
import Logo from '../logo'
import data from './data'
import { s } from './section-style'
import './alfa-section.css'
import AlfaHeading from './alfa-heading'
import AlfaMain from './alfa-main'

const AlfaSection = () =>{
    return(
        <div className='row'>
            <div className='col-sm-12 backimg paragraph' style={{position: 'relative' ,backgroundImage: `url(${data.backImgUrl})`}}>
                <div className='shade theme-cover' style={s.shade}></div>
                <div className='row'>
                    <div className='col-sm-12 col-lg-4'>
                        <div style={s.container}>
                            <Logo />
                        </div>
                        <img src={data.imgUrl} data-aos="fade-down-left" style={{maxWidth: '100%', height: 'auto'}} alt='left-img'/>
                    </div>
                    <div className='col-sm-12 col-lg-8' style={{overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <div className='row'>
                            <div data-aos="fade-left"  className='col-lg-7 col-md-8 col-sm-12' style={s.container}>
                                <AlfaHeading title={data.heading}/>
                            </div>
                            <div data-aos="fade-left" className='col-lg-5 col-md-4 col-sm-12 section-text' style={s.container}>
                                {data.firstParagraph}<br />
                                <br/>
                                <button onClick={() => window.open(`https://www.realtor.ca/on/greater-toronto/real-estate`, '_blank')}>FIND PROPERTIES</button>
                            </div>
                        </div>
                        <AlfaMain text={data.secondParagraph}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AlfaSection