import react from 'react';
import './styles/ourPromise.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const OurPromise = () => {
    document.querySelector('body').scrollTo(0,0)
    return(
        <section className="OurPromiseSection">
            <div className="container">
                <div className="col-50">

                    <AnimationOnScroll animateOnce={true} delay = {200} animateIn="animate__fadeIn">
                        <h1>Our Promise</h1>
                        <h3>Why us?</h3>
                        <h4>We strive to provide your customers with the best user experience possible, no matter what device they are using to access your webpage.</h4>

                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce={true} delay = {100} animateIn="animate__fadeIn">
                        <h3>What We Do</h3>
                        <h4>We provide your company with a solution from start to finish, getting the webpage designed, coded, hosted AND we can help generate traffic to your webpage using our SEO and Marketing knowledge. We always ensure that our customers are happy with the work provided before taking any payments.</h4>
                    </AnimationOnScroll>
                    <button className="read-more">Read More</button>
                </div>
            <div className='col-50'>
                <img className="main-img" src="images/mainImage.png" alt="Main coding image"></img>
            </div> 
        </div>
        </section>
    )
}

export default OurPromise;