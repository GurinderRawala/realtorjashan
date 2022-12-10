import React from "react";
import Logo from '../logo';
import './styles.css'
import { data } from "./data";
import Title from "./title";
import { s } from "./styles";
const main = {
    backgroundImage: `url(${data.backgroundImage})`,
    paddingTop: 25
}
const SellItLikeJashan = () =>{
    return(
        <div className="row">
            <div className="col-sm-12 pt-5 my-2 backimg" style={main}>
                <Logo />
                <div className="row">
                    <div className="col-sm-6 App-header" style={s.sideA}>
                        <Title title={data.title}/>
                        <div style={{padding: 10}}>
                            <div style={s.subTitle}>{data.subTitle}</div>
                        </div>
                    </div>
                    <div className="col-sm-6 App-header" style={s.sideB}>
                        <img data-aos="fade-up" src={data.img} style={{maxWidth: '100%', maxHeight: 450}} alt='house-img'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SellItLikeJashan