import React from "react";
import { ReactDOM } from "react";
import  PurchaseBtn  from '../components/buttons.js';
import { Component } from "react";
import './styles/homepage.css';
import Navbar from "../components/navbar.js";
import { BrowserRouter, router, route, Link } from 'react-router-dom';
import ContactForm from "../components/form.js";
import { props } from 'react';
import {useState, useEffect} from 'react';
import Packages from "./packages.js";
import Services from "./services.js";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import AboutUs from "./aboutUs.js";
import Typewriter from 'typewriter-effect';
import OurPromise from "./ourPromise.js";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { rootShouldForwardProp } from "@mui/material/styles/styled.js";

const Homepage = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { full_name, email_address, phone_number, business_info } = e.target.elements;
        let details = {
            full_name: full_name.value,
            email_address: email_address.value, 
            phone_number: phone_number.value,
            business_info: business_info.value
        };

        let response = await fetch("https://webpopdevfinal.herokuapp.com/api/requestQuote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Message Sent");
        let result = await response.json();
        e.target.reset();
        
    };
    window.scroll(0,0);

    return (
        <>
            <section data-testid="homepageTestView" className="homepage">
                <div className="container">
                    <div className="row">
                        <div className="column-50">
                            <div className="main-info">
                                <h2 align="left" className="main-title">
                                    Premium website designs starting from <span class = "colour-main">£249.99 upfront</span>, with <span className="orange"><Typewriter options={{
                                    strings: ["1 month free hosting.", "Free website domain.", "Free business emails.", "Unlimited revisions."],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: -200,
                                    delay:-200
                                }} /> </span>
                                </h2>  
                                <h4 align="left" className="sub-title">
                                    We provide anything from basic websites for small businesses, to fully functioning cross-platform applications for big companies
                                    looking to provide a service for their customer base.
                                    
                                </h4>
                                <h4 align="left" className="sub-title">
                                    To get a free, no obligation quote on your project, please use the buttons below.
                                </h4>
                                
                                    <Link to="/contact"><PurchaseBtn buttonClass="main-btn" buttonText="Get a Quote" /></Link>
                                    <Link to="/projects"><PurchaseBtn buttonClass="main-btn alt-btn" buttonText="See Our Work" /></Link>
                            </div>
                        </div>
                                
                        <div className="column-50-second">
                            <form onSubmit={handleSubmit} className="form-container">                                
                                <h3 align="center" className="form-title">Submit enquiry now to get <span class="colour-main">25% off any</span> premium package.</h3>
                                <input type="text" className="quote-name" id="full_name" placeholder="Full name" required/>
                                <input type="email" className="quote-email" id="email_address" placeholder="Email Address" required></input>
                                <input type="text" className="quote-number" id="phone_number" placeholder="Phone Number" required/>
                                <input type="text" className="business-info" id="business_info" placeholder="Business Information" required/>
                                <PurchaseBtn buttonType="submit" buttonClass="form-btn" buttonText={status} />
                                <Link to="/packages"><PurchaseBtn buttonClass="form-btn btn-alt" buttonText="Packages"/></Link>
                            </form>
                        </div>


                    </div>    
                </div>
            </section> 
            <AnimationOnScroll animateOnce={true} delay = {200} animateIn="animate__fadeIn">
                <AboutUs/>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                <Packages/>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} delay={200} animateIn="animate_fadeIn">
                <OurPromise/>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} delay = {200} animateIn="animate__fadeIn">
                <Services/>
            </AnimationOnScroll>
            

            
        </>
    )
}
    

export default Homepage;