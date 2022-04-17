import React from "react";
import Logo from '../logo';
import './styles.css'
import { data } from "./data";
import Form from "./form";
import Title from "./title";
import SellItButtons from "./sell-it-buttons";
import SellItLink from "./sell-it-link";
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
                        <div>
                            <div style={s.subTitle}>{data.subTitle}</div>
                            <br/>
                            <SellItButtons />
                        </div>
                        <SellItLink data={data.hooks}/>
                    </div>
                    <div className="col-sm-6 App-header" style={s.sideB}>
                        <img data-aos="fade-left" src={data.img} style={{maxWidth: '100%', height: 450}} alt='house-img'/>
                        <Form title={data.salesTips}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SellItLikeJashan