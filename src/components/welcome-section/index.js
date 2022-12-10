import React from 'react'
import Container from './container'
import Logo from './logo'
import VideoSection from './video-section'
import WelcomeButtons from './welcome-buttons'
import WelcomeMessage from './welcome-message'
const WelcomSection = () =>{
    return(
        <Container
            Logo={Logo}
            WelcomeMessage={WelcomeMessage}
            WelcomeButtons={WelcomeButtons}
        >
            <VideoSection />
        </Container>
    )
}

export default WelcomSection