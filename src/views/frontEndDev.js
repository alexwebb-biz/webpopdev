import react from 'react';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import './styles/servicePage.css';
import ContactForm from './contact';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const FrontEnd = () => {
    return(
        <>
           <AnimationOnScroll animateOnce={true} delay = {100} animateIn="animate__fadeIn">

            <div className="service-container">
                <CodeOutlinedIcon className="service-icon"/>
                <h1>Front End Development</h1>
                <h4 className="bold">We offer a wide range of Front End Design and Development services, including but not limited to:</h4>
                <ul>
                    <li>One page Website Design & Development</li>
                    <li>Wordpress theme Design & Development</li>
                    <li>Shopify theme Design & Development</li>
                    <li>Desktop and mobile Design & Development.</li>
                    <li>Desktop and mobile Design & Development.</li>
                    <li>We can develop the above in HTML / CSS / SASS / JS / VUE.JS & REACT.JS</li>
                    <li>Responsive Design & Development is included as standard across all packages to make your website
                        suitable and appealing to all devices it will be viewed from.
                    </li>
                </ul>
                <h4 className="bold">
                    What are the differences in the languages you can develop my website in?
                </h4>
                <h4>All languages have pros and cons no matter what you choose. For most people who are looking for a new website, the language
                    it will be developed in will have no effect on the end user yourself. It all depends on what you are looking to have on your website,
                    will it be one page static with no need for payments / contact form? Then HTML would be the best as it's simple and fast. However, if you were
                    building a full website or app with need for accepting payments and other things, then you would use React.js as it's better for integrating with backend
                    development ( Read More );
                </h4>
            </div>
        </AnimationOnScroll>
            <ContactForm/>
        </>
    )
}

export default FrontEnd;

