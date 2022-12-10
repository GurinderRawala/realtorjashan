import React from "react";
const IntroHeading = ({backgroundImage, title}) =>{
    return(
        <div className="app-heading pt-3" style={{backgroundImage: `url('${backgroundImage}')`}}>
            {title}
        </div>
    )
}
export default IntroHeading