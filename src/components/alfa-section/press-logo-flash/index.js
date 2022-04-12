import React from 'react';
import { s } from '../section-style';
import { FlashLogo } from './flash-logo';
import { pressData } from './press-logo-data';
const PressLogoFlash = () =>{
    return(
        <div style={{...s.container, marginTop: 18}}>
            <FlashLogo data={pressData}/>
        </div>
    )
}
export default PressLogoFlash