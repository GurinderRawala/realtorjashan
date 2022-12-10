import React from "react";
import { s } from "./section-style";
const AlfaMain = ({text}) =>{
    return(
        <div className="container" style={{marginTop: 25}}>
            <div className="row">
                <div className="col-sm-12 theme-alfa" style={s.container}>
                    <div className="row">
                        <div className="col-sm-7">
                            <iframe style={{width: '100%', height: 300}}
                                src="https://www.youtube.com/embed/kacyaEXqVhs" title="frame-youtube">
                            </iframe>
                        </div>
                        <div className="col-sm-5 section-text">
                            <h1>{text.heading}</h1>
                            <p>{text.body}</p>
                            <div className="col-sm-12" style={{marginTop: 10}}>
                                <button onClick={() => window.location.href = "/contact"}>CONTACT JASHAN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AlfaMain