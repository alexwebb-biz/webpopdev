import react from 'react';
import {useState, useEffect} from 'react';
import props from 'react';
import './styles/package.css';
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Browser, Routes, Route, Link } from 'react-router-dom';
const Package = (props) =>{
    return(
        <AnimationOnScroll animateOnce={true} delay = {200} animateIn="animate__fadeIn">
        <div className="package-container">
            <div className="package-header">
                <h3 align="center" className="package-title">
                    {props.packageType}
                </h3>
            </div>
            <div className="package-price-container">
                <h2 align="center" className="package-price">
                    {props.packagePrice}
                </h2>
            </div>
            <div className="package-info">
                <ul>
                    <li>{props.packageInfoOne}</li>
                    <li>{props.packageInfoTwo}</li>
                    <li>{props.packageInfoThree}</li>
                    <li>{props.packageInfoFour}</li>
                    <li>{props.packageInfoFive}</li>
                </ul>
                <Link to ="/contact"><button className="enquiry-btn">Enquire Now</button></Link>
            </div>
            
        </div>
        </AnimationOnScroll>

    )
}


export default Package;