import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer_css.css"
const Footer = ()=>{
return(
    <>
        <footer className="footer_box">
                ©️ Rajeev Farmaland. All Right Reserved | <NavLink to="#">Terms and Conditions</NavLink> 
        </footer>
    </>
)
}
export default Footer