import React from 'react'
import Logo from './logo'
import WelcomeButtons from './welcome-buttons'

const Container = () =>{
    return(
        <div className='row'>
            <div className='col-sm-6 no-padding myContainer welcome-container'>
                <Logo  />
                <div data-aos="fade-right" className="app-statement">
                Ryan Serhant is a real estate broker, CEO, and founder of SERHANT., a 
                vertically-integrated mega brokerage comprising an in-house film studio, 
                education arm, marketing division, and technology platform. He's also a 
                bestselling author, producer, and star of Bravo's Million Dollar Listing New York and Sell It Like Serhant.
                </div>
                <div className='col-sm-12'>
                <WelcomeButtons />
                </div>
            </div>
            <div className='col-sm-6 no-padding'>
                
            </div>
            
        </div>
    )
}

export default Container