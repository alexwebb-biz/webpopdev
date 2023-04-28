import react from 'react';
import props from 'react';
import '../components/styles/service.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import {Browser, Routes, Route, Link} from 'react-router-dom';

const Service = (props) =>{
    return(
        <>
        <AnimationOnScroll animateOnce={true} delay = {200} animateIn="animate__fadeIn">
            <div className="service-Container">
                <CodeOutlinedIcon className='icon-service'/>
                <h2>{props.serviceTitle}</h2>
                <h5>{props.serviceDescription}</h5>
                <Link to = {props.serviceLink}><button>{props.serviceMoreInfo}</button></Link>
            </div>
        </AnimationOnScroll>
        </>
        
    )
}


export default Service;