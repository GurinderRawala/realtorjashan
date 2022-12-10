import React from 'react';
import { s } from './styles';
const Form = ({title}) =>{
    return(
        <div data-aos="fade-up" className='sell-like-form-container pt-5'>
            <div className='sell-like-text'>{title}</div>
            <br />
            <form>
                <input 
                    type={'text'} 
                    className='form-control' 
                    placeholder='EMAIL ADDRESS' 
                    style={s.input} 
                />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form