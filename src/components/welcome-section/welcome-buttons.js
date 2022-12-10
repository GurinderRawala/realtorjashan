import React from 'react'

const WelcomeButtons = () =>{
    return(
        <div data-aos="fade-right" id="welcome-buttons" className='App-row-flex col-sm-12' 
            style={{justifyContent: 'space-evenly'}}>
            <button onClick={() => window.location.href = "/about"}>I`M NEW TO GREWAL</button>
            <button onClick={() => window.location.href = "/contact"}>CONTACT GREWAL</button>
        </div>
    )
}

export default WelcomeButtons