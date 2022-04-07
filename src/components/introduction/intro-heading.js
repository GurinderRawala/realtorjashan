import React from "react";
const IntroHeading = ({backgroundImage, title}) =>{
    return(
      <div className="app-heading" style={{backgroundImage: `url('${backgroundImage}')`}}>
        <div>{title}</div>
      </div>
    )
}
export default IntroHeading