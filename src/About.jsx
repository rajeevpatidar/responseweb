import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from  "../src/images/Aboutus.png"
const About = ()=>{
    return(
        <>
        <Common imgsrc={web} visit="/contact" name="Grow your business with" btnname="Get Started" />
        </>

    )
}
export default About