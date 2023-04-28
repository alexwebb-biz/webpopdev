import react from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import './styles/footer.css';
import {FaArrowRight} from "react-icons/fa";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Footer(){
    return(
        <div className="footer">
            <div className="col-3">
                <h3>Web Pop Development 2022</h3>
                <h4>About Us</h4>
                <h5>We are small web design and development agency that specialise in UI/UX design and development. We always ensure that your users
                    have a great experience when they are viewing and interacting with your webpage, just like this website your looking at. You can 
                    more about us here.
                </h5>
                <h5 className='read-more'>Read More</h5><ArrowForwardIcon className='arrow-read-more'/>
            </div>
            <br></br>
            <div className="col-3">
                <div className='col-50'>
                    <h4>Contact Us</h4>
                    <h5>Twitter</h5>
                    <h5>Instagram</h5>
                    <h5>Contact Form</h5>
                    <h5>Email</h5>
                </div>
                <div className='col-50'>
                    <h4>Website Map</h4>
                    <h5>Homepage</h5>
                    <h5>Services</h5>
                    <h5>Packages</h5>
                    <h5>Contact Us</h5>
                </div>
                <div className='col-50'>
                    <h4>Website Map</h4>
                    <h5>Homepage</h5>
                    <h5>Services</h5>
                    <h5>Packages</h5>
                    <h5>Contact Us</h5>
                </div>
            </div>
            <div className='bottom-writing'>
                <p>Web Pop Development Established 2022</p>
            </div>
        </div>
    )
}

export default Footer;