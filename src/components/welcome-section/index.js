import React from 'react'
import Container from './container'
import Logo from './logo'
import { ImageSection } from './image-section'
import WelcomeButtons from './welcome-buttons'
import WelcomeMessage from './welcome-message'
const WelcomSection = () =>{
    return(
        <Container
            Logo={Logo}
            WelcomeMessage={WelcomeMessage}
            WelcomeButtons={WelcomeButtons}
        >
            <ImageSection />
        </Container>
    )
}

export default WelcomSection