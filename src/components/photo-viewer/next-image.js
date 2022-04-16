import React from "react";
import { Style } from "./viewer-styles";
const NextImage = ({image}) =>{
    return(
        <div className="col-sm-12 pt-5 Lg-link" style={Style.nextImage}>
            <img src={image} alt='next-img' style={{width: '100%', height: 395}} />
        </div>
    )
}
export default NextImage