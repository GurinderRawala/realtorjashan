import React from "react";
import { Style } from "./viewer-styles";
const NextImage = ({image}) =>{
    return(
        <div style={Style.nextImage}>
            <img src={image} alt='next-img' className="slide-image" />
        </div>
    )
}
export default NextImage