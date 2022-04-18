import React from "react";
import * as $ from 'jquery';
const ErrorMessage = ({ response }) =>{
    let errKeys;
    let errMessage = ""
    if(response?.err){
        const { errors } = response.err
        errKeys = Object.keys(errors)
        $(`input`).css({ "border-left": "1px solid #33333355" })
        for(const xx in errKeys){
            errMessage += errKeys[xx].charAt(0).toUpperCase() + errKeys[xx].slice(1) + ", "
            $(`input[name = "${errKeys[xx]}"]`).css({ "border-left": "8px solid #b12" })
        }

    }

    return(
        <div className="container my-3">
        {
            response === 'Created'
            ? <div className="alert alert-success text-center" style={{borderRadius: 0}}>
                We will get back to you shortly.
              </div>
            : null
        }
        {
            response?.err
            ?<div className="alert alert-danger text-center" style={{borderRadius: 0}}>
            { `Please Enter Your ${errMessage.trim().slice(0, -1)}` }
          </div>
          :null
        }
        </div>
    )
}
export default ErrorMessage