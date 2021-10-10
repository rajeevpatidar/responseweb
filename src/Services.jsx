import React from "react";
import { NavLink } from "react-router-dom";
import datas from "./AgriData"
import Card from "./Card.jsx";
import "./Services_css.css"
const Services = ()=>{
    return(
        <>
          <div className="services_box">
              <div className="s_head">
                    <h1>Our SerVices</h1>
              </div>
              <div className="s_show">
                  <div className="s_set">
                      {
                          datas.map((val,index)=>{
                            //   console.log(val,index);
                            return  <Card key={index} imgsrc={val.imgs} title={val.title} />
                            })
                      }
                  </div>
              </div>
          </div>
        </>

    )
}
export default Services