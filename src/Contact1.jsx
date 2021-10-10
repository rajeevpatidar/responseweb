import React, { useState } from "react";
import "./Contact_css.css"
import { NavLink } from "react-router-dom";
const Contact = ()=>{
    const [dt,setdt] = useState({
        username:"",
        phone:"",
        email:"",
        message:""
    });
    const formEvent=(event)=>{
        const {name,value} = event.target;
        setdt((prev)=>{
            return {
                ...prev,
                [name] :value,
            }
        })
    };
    const formSubmit=(e)=>{
        // e.preventDefault();
        alert(`My name is ${dt.username}. My mobile number is ${dt.phone}`)
    };
    return(
        <>
           <div className="contact_box">
               <div className="contact_head">
                   <h1>
                       Contact US
                   </h1>
               </div>
               <div className="contact_form">
                   <form onSubmit={formSubmit}>
                       <div className="form_div">
                           <label htmlFor="user_name">UserName</label>
                           <input onChange={formEvent} value={dt.username} type="text" name="username" id="user_name" />
                       </div>
                       <div className="form_div">
                           <label htmlFor="number">Phone Number</label>
                           <input onChange={formEvent} value={dt.phone} type="number" name="phone" id="number" />
                       </div>
                       <div className="form_div">
                           <label htmlFor="email">email</label>
                           <input onChange={formEvent} value={dt.email} type="email" name="email" id="email" />
                       </div>
                       <div className="form_div">
                           <label htmlFor="message">Message</label>
                           {/* <input type="text" name="" id="message" /> */}
                           <textarea onChange={formEvent} value={dt.message} name="message" id="message" cols="20" rows="5"></textarea>
                       </div>
                      <div className="form_div">
                          <button className="s_btn">SubMit</button>
                      </div>
                   </form>
               </div>
           </div>

        </>

    )
}
export default Contact