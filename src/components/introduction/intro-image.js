import React from 'react';
const IntroImage = ({image}) =>{
  return(
    <div className='intro-image'>
        <img src={image} style={{width: '100%', height: '100%'}} alt='intro-media' />
    </div>
  )
}
export default IntroImage