import React from "react";
import { NavLink } from "react-router-dom";
const Common =(props)=>{
    return(
        <>
            <section className="home_section">
                <div className="home_content">
                    <div className="home_text">
                        <h1 className="brand_detail" >
                            {props.name} <br /> with 
                            <strong className="brand_name" style={{fontSize:"30px",color:"royalblue"}}>
                                Rajeev Industries
                            </strong>
                        </h1>
                        <p className="brand_info">we are the team of talented developer making websites</p>
                        <div>
                            <NavLink to={props.visit} className ="btn_get_started">
                            {props.btnname}
                            </NavLink>
                            </div>
                    </div>
                    <div className="home_img">
                        <img src={props.imgsrc} alt="Error 404" className="h_img" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Common