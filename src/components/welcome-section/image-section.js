import React from 'react'

import  ResponsiveImage from '../responsive-image'

const welcomeSectionImage = `https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg`
export const ImageSection = () =>{
    return(
        <div className='video-container'>
            <div className='shade frame' style={{ backgroundColor: 'transparent', opacity: 1, zIndex: 1}} />
            <ResponsiveImage src={welcomeSectionImage} customStyle={{ height: "100%", width: "100%"}}/>
        </div>
    )
}