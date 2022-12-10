import React from 'react'

const Container = ({Logo, WelcomeMessage, WelcomeButtons, children}) =>{
    return(
        <div className='row'>
            <div className='col-sm-6 reverse-section' style={{padding: 0}}>
                <div className='slide-text'>
                    <WelcomeButtons />
                </div>
                { children }
            </div>
            <div className='col-sm-6 no-padding myContainer welcome-container'>
                <Logo  />
                <WelcomeMessage />
                <div className='col-sm-12 show-tab'>
                    <WelcomeButtons />
                </div>
            </div>
            <div className='col-sm-6 show-tab' style={{padding: 0}}>
                { children }
            </div>
        
        </div>
    )
}

export default Container