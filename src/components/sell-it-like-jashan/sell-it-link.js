import React from "react";
import { Link } from "react-router-dom";
const SellItLink = ({data}) =>{
    return(
        <div className="sell-it-link-container App-header">
            <p>{data.getLicense}</p>
            <Link to='/'>{data.learnHowLink}</Link>
        </div>
    )
}
export default SellItLink