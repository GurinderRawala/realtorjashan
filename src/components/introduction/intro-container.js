import React from 'react';
const IntroContainer = ({children}) =>{
    return(
        <div className='row justify-content-lg-center'>
            <div className='col-sm-12 col-lg-11 theme-alfa'>
                <div className='row'>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default IntroContainer