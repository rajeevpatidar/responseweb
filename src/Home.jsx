import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/homeimg.png"
import Common from "./Common";
import "./Home_css.css"
const Home = () => {
    return (
        <>
            <Common imgsrc={web} visit="/services" name="Grow your business" btnname="Get Started" />
        </>
    )
}
export default Home