import React from "react";
import footerStyle from "./footer-style";
const CopyRight = () =>{
    const date = new Date()
    return(
        <div style={footerStyle.copyright}>
           &copy; {date.getFullYear()} All rights reserve. Realtor Jashan
        </div>
    )
}
export default CopyRight