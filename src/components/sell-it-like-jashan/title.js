import React from 'react';
const Title = ({title}) =>{
    return(
        <div>
            <div data-aos="fade-up" className='white-text title-text'>{title.white}</div>
            <div data-aos="fade-down" className='gold-text title-text'>{title.gold}</div>
        </div>
    )
}
export default Title