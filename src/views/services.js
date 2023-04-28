import react from 'react';
import './styles/services.css';
import Service from '../components/service.js';
import {useState, useEffect} from 'react';

const Services = () => {
    document.querySelector('body').scrollTo(0,0)

    return(
        <>
            <section className="servicesPage">
                <h1> Our Services </h1>
                <Service serviceLink = "/front-end-development" serviceTitle="Front End Development" serviceMoreInfo="More Info" serviceDescription="We provide Front End Development for pre-designed websites. We can use a variety of langauges and frameworks including but not limited to React.js, Vue.js, HTML, CSS, Javascript, SASS."/>
                <Service serviceLink = "/back-end-development" serviceTitle="Back End Development" serviceMoreInfo="More Info" serviceDescription="We provide Back End Development for websites or applications. We can use a variety of langauges and frameworks including but not limited to React.js, Node.js, mySQL, Php and others."/>
                <Service serviceLink = "/full-website-development" serviceTitle="Website Development" serviceMoreInfo="More Info" serviceDescription="Full Website development consists of Front End and Back end listed above coming together to create a complete functioning website from start to finish. This is the best choice."/>
                <Service serviceLink = "/search-engine-optimisation" serviceTitle="SEO Optimisation" serviceMoreInfo="More Info" serviceDescription="Struggling to rank in search engines? We're here to help. We can edit your current website's SEO or include SEO in the website package you choose to help you rank highly."/>
                <Service serviceLink = "/social-media-advertisement" serviceTitle="Social Media Marketing" serviceMoreInfo="More Info" serviceDescription="Need help with marketing or social media posts? Conversion rates low? We can help, we have a lot of experience in producing social media ads and content that will help."/>
                <Service serviceTitle="Always Cross-Platform" serviceMoreInfo="More Info" serviceDescription="We strongly believe that all websites should be accessible to all users across all devices, we specialise in responsive design and compatibilty at no extra cost, unlike others."/>
            </section>
            

        </>
    )
}


export default Services;