import React from 'react';
import AlfaSection from '../components/alfa-section';
import Introduction from '../components/introduction';
import PhotoViewer from '../components/photo-viewer';
import SellItLikeJashan from '../components/sell-it-like-jashan';
import WelcomSection from '../components/welcome-section';

const HomeScreen = () =>{
    return(
      <>
      <WelcomSection />
      <Introduction />
      <PhotoViewer />
      <AlfaSection />
      <SellItLikeJashan />
      </>
    )
}

export default HomeScreen