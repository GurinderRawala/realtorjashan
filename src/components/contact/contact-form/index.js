import React, { useEffect } from "react";
import { CollectInput } from "../../../collect-input";
import ErrorMessage from "../../error-message";
import { s } from "../contact-styles";
import { submitForm } from "./submit-form";
const ContactForm = () =>{
    const {collection, handleInput} = CollectInput()
    const { submit, res } = submitForm({ collection })
    useEffect(() =>{
        if(res.response === "Created") handleInput('', 'clear')
        return () => {}
    }, [handleInput, res])
    return(
        <>
            <ErrorMessage response={res?.response} isLoading={res?.isLoading} />
            <form onSubmit={submit}>
            <div className="container">
            <div className="row">
                <div className="col-sm-6 contact-spacer">
                <input 
                    type={'text'} 
                    className='form-control' 
                    placeholder='First Name' 
                    name="firstname"
                    style={s.input} 
                    value={collection.firstname || ''}
                    onChange={(e) => handleInput(e.target.value, 'firstname')}
                    />
                </div>
                <div className="col-sm-6 contact-spacer">
                <input 
                    type={'text'} 
                    className='form-control' 
                    placeholder='Last Name' 
                    style={s.input} 
                    name="lastname"
                    value={collection.lastname || ''}
                    onChange={(e) => handleInput(e.target.value, 'lastname')}
                    />
                </div>
                <div className="col-sm-6 contact-spacer">
                <input 
                    type={'text'} 
                    className='form-control' 
                    placeholder='Phone' 
                    name="phone"
                    style={s.input} 
                    value={collection.phone || ''}
                    onChange={(e) => handleInput(e.target.value, 'phone')}
                    />
                </div>
                <div className="col-sm-6 contact-spacer">
                <input 
                    type={'text'} 
                    className='form-control' 
                    placeholder='Email' 
                    name="email"
                    style={s.input} 
                    value={collection.email || ''}
                    onChange={(e) => handleInput(e.target.value, 'email')}
                    />
                </div>
            <div className="col-sm-12 contact-spacer">
                <textarea 
                className="form-control" 
                style={s.input} 
                placeholder="Your Message"
                value={collection.message || ''}
                onChange={(e) => handleInput(e.target.value, 'message')}
                />
            </div>
            <div className="col-sm-12 contact-spacer">
                <br />
                <button>Submit</button>
            </div>
            </div>
            </div>
        </form>
        </>
    )
}
export default ContactForm