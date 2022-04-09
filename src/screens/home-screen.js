import React from 'react';
import Introduction from '../components/introduction';
import PhotoViewer from '../components/photo-viewer';
import WelcomSection from '../components/welcome-section';

const HomeScreen = () =>{
    return(
      <>
      <WelcomSection />
      <br />
      <Introduction />
      <br />
      <PhotoViewer />
      </>
    )
}

export default HomeScreen