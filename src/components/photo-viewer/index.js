import React from 'react';
import { Action } from './action-button';
import CurrentImage from './current-image';
import NextImage from './next-image';
import ViewerControlls from './viewer-controlls';
import viewerData from './viewer-data';
import { Style } from './viewer-styles';
import './photo-viewer.css'
const inital = { currentIndex: 0, nextIndex: 1 }
const PhotoViewer = () =>{
    const { nextImage, currentImage, changeSlide } = Action(viewerData, inital)
    return(
        <div className='row'>
            <div data-aos='fade-down' className='col-sm-12' style={Style.wrapper}>
                    <NextImage image={nextImage.url}/>
                    <CurrentImage image={currentImage.url}/>
                    <ViewerControlls 
                    actionButton={(e) => changeSlide(e)}
                    />
            </div>
        </div>
    )
}

export default PhotoViewer