import React, { useEffect } from "react";
import * as $ from 'jquery';
import { ImSpinner3 } from 'react-icons/im'

const ErrorMessage = ({ response, isLoading }) =>{

    useEffect(() =>{
        $(`input`).css({ "border-left": "1px solid #33333355" })
        if(response?.err){
             response.err.map((error, i) => $(`input[name = "${error.param}"]`).css({ "border-left": "8px solid #b12" }) )
        }
        return()=>{}
    }, [response])
    const CreateErrorMsg = () =>{
        return(
            <ul className="list-group">
            {
                response.err?.map((error, i) =>
                <li key={i} className="list-group-item text-center" style={{color: '#b12', fontSize: 14}}>
                    {error.msg}
                </li>
                )
            }
            </ul>
        )
    }
    
    return(
        <div className="container my-3 text-center">
            {
                isLoading
                ? <ImSpinner3 className="App-logo" size={28}/>
                : null
            }

        {
            response === 'Created'
            ? <div className="alert alert-success text-center" style={{borderRadius: 0}}>
                We will get back to you shortly
              </div>
            : null
        }
        {
            response?.err
            ?<CreateErrorMsg />
            :response?.serverErr?._message
                ?<div className="alert alert-danger text-center" style={{borderRadius: 0}}>
                    { response.serverErr._message.toUpperCase() }
                 </div>
                :null
        }

        </div>
    )
}
export default ErrorMessage