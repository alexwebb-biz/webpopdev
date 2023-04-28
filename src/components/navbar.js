import React, { useState } from "react";
import { Component } from "react";
import './styles/navbar.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from 'react';

{/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';*/}


function Navbar() {

        const navRef = useRef();

        const showNavbar = () => {
            navRef.current.classList.toggle("responsive_nav");
        }

        const hideNavbar = () => {
            navRef.current.classList.remove("responsive_nav")
        }


        return(
            <header>
                <img src="mainLogo.png"></img>
                <nav ref={navRef} className="navbar" data-testid="navbarTest">
                    <ul>
                        <li onClick={hideNavbar}><Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link></li>
                        <li onClick={hideNavbar}><Link style={{textDecoration: 'none', color: 'black'}} to="/packages">Packages</Link></li>
                        <li onClick={hideNavbar}><Link style={{textDecoration: 'none', color: 'black'}} to="/contact">Contact Us</Link></li>
                        <li onClick={hideNavbar}><Link style={{textDecoration: 'none', color: 'black'}} to="/register">Register</Link></li>
                        <li onClick={hideNavbar}><Link style={{textDecoration: 'none', color: 'black'}} to="/services">Services</Link></li>
                    <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
                        <FaTimes/>
                    </button>
                    </ul>
                </nav>

                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </header>
            
        )
}


export default Navbar;