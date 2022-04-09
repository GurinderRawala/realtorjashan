import React from "react";
import { GrNext } from 'react-icons/gr';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Style } from "./viewer-styles";
const ViewerControlls = ({actionButton}) =>{
    return(
        <div className="App-row-flex slide-text" style={{justifyContent: 'space-between', top: '50%'}}>
                <b
                className="btn btn-Link" 
                onClick={() => actionButton(-1)}
                style={Style.button}
                > 
                <MdOutlineArrowBackIosNew  size={35}/>
                </b>
                <b 
                className="btn btn-Link" 
                onClick={() => actionButton(1)}
                style={Style.button}
                > 
                <GrNext size={35} />
                </b>
        </div>
    )
}
export default ViewerControlls