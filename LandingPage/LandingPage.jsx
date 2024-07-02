import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import CardComponent from '../Components/CardComponent';
import carIcon from '../assets/car.svg';  
import marketPriceIcon from '../assets/marketPrice.svg';  
import getPriceIcon from '../assets/getPrice.svg';  
import getCarIcon from '../assets/getCar.svg';  
import carBuy from '../assets/carbuyer.jpeg';  
import carLogo from '../assets/carlogo.png';  

export default function LandingPage() {
    const navigate = useNavigate()
    
    const handleClick = () => {
        window.location.href = 'https://forms.gle/zjYKPD9eNJDmZBjy5'
    }

    
    // State 
    return (
        <>
        <div className="flex banner-section"> 
            <div>
                <h1>The <span className="heaading-color"> best </ span> <br/> way to buy your <br/> car</h1>
                <p className="heading-subtitle">Tell us the car you want and get a get cheapest price.</p>
            </div>
            <div className="flex-direction">
                <img className="car-logo" src={carLogo} />
                <span className="Logo-title"> Fairbot </span>
                <button className="get-started-button" onClick={handleClick}> Get Started </button>
            </div>
        </div>
        
        <div className="main-container">
            <h2 className="flex section-2-title"> How It Works </h2>
            <div className="flex cards-container">
                <CardComponent
                    icon={carIcon}
                    title="Describe your car"
                    description="Share a few quick details about the car you are looking for."
                />
                <CardComponent
                    icon={marketPriceIcon}
                    title="View the market price"
                    description="Get the market price for your car, with insights."
                />
                <CardComponent
                    icon={getPriceIcon}
                    title="Get a discount price"
                    description="Our experts get you the deal lower than market price!"
                />
                <CardComponent
                    icon={getCarIcon}
                    title="Get your car!"
                    description="Save time and money. We do the work to find your car."
                />
            </div>
        </div>
        
        <div className="main-container">
            <div className="flex value-prop-section">
                <div className="value-prop-content">
                    <h2>Save Time & Money</h2>
                    <p>Looking to buy a car? Save up to %10 or more for your car by working with our team of experts. </p>
                    <button onClick={handleClick}> Get your price </button>
                </div>
                <div className="buying-a-car-img">
                    <img src={carBuy} alt="A person buying a car" />
                </div>
            </div>  
        </div>
        
        <div className="footer-section">
            <div className="flex-footer">
                <img className="car-logo-small" src={carLogo} />
                <p className="Logo-title-small"> Fairbot </p>
            </div>
        </div>
        </>
    )
}
