import React, { useState } from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from "../components/navbar.js";
import './styles/contact.css';
import { useEffect } from 'react';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { AnimationOnScroll } from "react-animation-on-scroll";

const ContactForm = () => {
    window.scroll(0,0);
    
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, phone, company_info, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value, 
            phone: phone.value,
            company_info: company_info.value,
            message: message.value
        };

        let response = await fetch("https://webpopdevfinal.herokuapp.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        
        setStatus("Message Sent...");
        let result = await response.json();
        e.target.reset();
        
    };

    

    return (
        <div className="contactPage">
            <AnimationOnScroll animateOnce={true} delay = {100} animateIn="animate__fadeIn">
        
            <h2>Contact Us</h2>
            <h4>Please use the options below or scroll to the bottom to fill out our contact form.</h4>
            <div className="contactPageOption">
                <ForumOutlinedIcon className="iconOption"/>
                <h3>Live Email</h3>
                <h5>Contact us via live chat using the button below to get an instant response from one of our team.</h5>
                <button>Start Chat</button>
            </div>
            <div className="contactPageOption">
                <FacebookOutlinedIcon className="iconOption"/>
                <h3>Facebook Chat</h3>
                <h5>Contact us on facebook using the button below to start a chat with us, average response time is 1 hour.</h5>
                <a href="https://m.me/webpopdevelopment"><button>Start Chat</button></a>
            </div>
            <div className="contactPageOption">
                <WhatsAppIcon className="iconOption"/>
                <h3>Whatsapp Chat</h3>
                <h5>Contact us on Whatsapp using the button below and you will receive a response within a few minutes.</h5>
                <a href="https://wa.link/avu5s0"><button>Start Chat</button></a>
            </div>
            <div className="contactPageOption-full">
                <AlternateEmailOutlinedIcon className="iconOption"/>
                <h3>Via Email</h3>
                <h5>Contact us via email for a response within 3 hours, please use the button below to open your default mailing app.</h5>
                <a href="mailto:alex@webpopdev.co.uk?"><button>Send Email</button></a>
                <h3 className="contactTitle">Use the Contact Form</h3>
                <h5 className="contactSubTitle">Use the form below for a response within 2 hours, please make sure all fields are filled out to ensure you get a detailed response.</h5>
                <form onSubmit={handleSubmit}> 
                    <div>
                        <input type="text" id="name" placeholder="Full name" required />
                        <div>
                        <input type="email" id="email" placeholder="Email Address" required />
                        </div>
                        <div>
                        <input type="text" id="phone" placeholder="Phone Number" required />
                        <input type="text" id="company_info" placeholder="Company Name" required />
                        <textarea id="message" rows="8" placeholder="Your message here" />
                        </div><br></br>
                        <button type="submit">{status}</button>
                    </div>
                </form>
            </div>
            </AnimationOnScroll>
        </div>

        
    )
}

export default ContactForm;