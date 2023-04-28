import react from "react";
import './styles/packages.css';
import Package from '../components/package.js';

const Packages = () => {
    document.querySelector('body').scrollTo(0,0)

    return(
        <section className="packages">
                <h1>Packages</h1>
                <h4>Please take a look at some of our popular packages, you can always use the contact page if you want something built that isn't listed here or if you want a custom package.</h4>

            <div className="package">
                <div className="package-first">
                    <Package packageType="Personal Starter Package" packagePrice="£249.99" packageInfoOne="Great for Individuals" packageInfoTwo="Includes a 2 page design and development" packageInfoThree="Free domain of your choice" packageInfoFour="Unlimited revisions until you are a happy" packageInfoFive="Free Hosting for 2 months"/>
                </div>
                <div className="package-second">
                    <Package packageType="Business Starter Package" packagePrice="£299.99" packageInfoOne="Great for small businesses" packageInfoTwo="Includes a 3 page design and development" packageInfoThree="Free domain of your choice" packageInfoFour="Unlimited revisions until you are a happy" packageInfoFive="Free Hosting for 2 months"/>
                </div>
                <div className="package-third">
                    <Package packageType="Business Premium Package" packagePrice="£599.99" packageInfoOne="Great for small businesses" packageInfoTwo="Includes a 8 page design and development" packageInfoThree="Free domain of your choice" packageInfoFour="Unlimited revisions until you are a happy" packageInfoFive="Free Hosting for 2 months"/>
                </div>
            </div>
        </section>
    )
}

export default Packages;