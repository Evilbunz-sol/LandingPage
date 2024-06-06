import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import CardComponent from '../Components/CardComponent';
import carIcon from '../assets/car.svg';  
import carBuy from '../assets/carbuyer.jpeg';  

export default function LandingPage() {
    const navigate = useNavigate()
    
    // State 
    return (
        <>
        <div className="flex banner-section"> 
            <div>
                <h1>The <span className="heaading-color"> best </ span> <br/> way to buy your <br/> car</h1>
                <p className="heading-subtitle">Tell us the car you want and get a get cheapest price.</p>
            </div>
            <div>
                <button className="get-started-button"> Get Started </button>
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
                    icon={carIcon}
                    title="View the market price"
                    description="Get the market price for your car, with insights."
                />
                <CardComponent
                    icon={carIcon}
                    title="Get a discount price"
                    description="Our experts get you the deal lower than market price!"
                />
                <CardComponent
                    icon={carIcon}
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
                    <button>Get an offer</button>
                </div>
                <div className="buying-a-car-img">
                    <img src={carBuy} alt="A person buying a car" />
                </div>
            </div>
        </div>
        </>
    )
}