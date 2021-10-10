import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar_css.css"
// import ReadMoreSharpIcon from '@mui/icons-material/ReadMoreSharp';
const Navbar = () => {
    const show_comp = () => {
        let dis = document.getElementById("nav_sho").style.display;
        if(dis==="none"){
            document.getElementById("nav_sho").style.display="flex";
        }
        else{
            document.getElementById("nav_sho").style.display="none";

        }
    }
    return (
        <>
            <div className="nav_box">
                <h1 className="nav_name">Rajeev Industries</h1>
                <div className="nav_component">
                    <NavLink activeClassName="navComp_active" className="nav_link" exact to="/">Home</NavLink>
                    <NavLink activeClassName="navComp_active" className="nav_link" exact to="/about">About</NavLink>
                    <NavLink activeClassName="navComp_active" className="nav_link" exact to="/services">Services</NavLink>
                    <NavLink activeClassName="navComp_active" className="nav_link" exact to="/contact">Contact</NavLink>
                </div>
                <div className="nav_phone"  >
                    <button onClick={show_comp} className="nav_showbtn">show</button>
                </div>
            </div>
            <div id="nav_sho">
                <NavLink activeClassName="navComp_active" className="nav_link" exact to="/">Home</NavLink>
                <NavLink activeClassName="navComp_active" className="nav_link" exact to="/about">About</NavLink>
                <NavLink activeClassName="navComp_active" className="nav_link" exact to="/services">Services</NavLink>
                <NavLink activeClassName="navComp_active" className="nav_link" exact to="/contact">Contact</NavLink>
            </div>
        </>
    )
}
export default Navbar