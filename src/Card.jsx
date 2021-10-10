import React from "react";
import {  NavLink} from "react-router-dom";
import "./Services_css.css"
const Card = (props)=>{
    return(
        <>
            <div className="card_box">
                <div className="inner_car_box" >
                    <div className="card_img">
                       <img src={props.imgsrc} alt="Er/ror" className="card_img" /> 
                       <NavLink to/>
                    </div>
                    <div className="card_info">
                        <h1 className="card_title">{props.title}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card