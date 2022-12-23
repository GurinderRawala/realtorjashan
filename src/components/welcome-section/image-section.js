import React from 'react'

import  ResponsiveImage from '../responsive-image'

const welcomeSectionImage = `https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
export const ImageSection = () =>{
    return(
        <div className='video-container'>
            <div className='shade frame' style={{ backgroundColor: 'transparent', opacity: 1, zIndex: 1}} />
            <ResponsiveImage src={welcomeSectionImage} customStyle={{ height: "100%", width: "100%"}}/>
        </div>
    )
}