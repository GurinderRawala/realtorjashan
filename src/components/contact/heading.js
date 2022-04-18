import React from "react";
const Heading = ({data}) =>{
    return(
        <>
        <div className="col-sm-12 text-left contact-heading contact-heading-part-one">
            { data.heading.partOne }
        </div>
        <div className="col-sm-12 text-end contact-heading contact-heading-part-two">
            { data.heading.partTwo }
        </div>
        </>
    )
}
export default Heading