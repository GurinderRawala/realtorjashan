import React from "react"
const CurrentImage = ({image}) =>{
    return(
            <div className="shade" style={{backgroundColor: 'transparent', opacity: 1}}>
                <div className="container">
                <img src={image} alt='cur-pic' className="slide-image" />
                </div>
            </div>
    )
}
export default CurrentImage