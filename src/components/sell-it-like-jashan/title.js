import React from 'react';
const Title = ({title}) =>{
    return(
        <div>
            <div data-aos="fade-right" className='white-text title-text'>{title.white}</div>
            <div data-aos="fade-left" className='gold-text title-text'>{title.gold}</div>
        </div>
    )
}
export default Title