import React from 'react'
import "./HeroSection.css"
import barcelona from "../../../assets/barcelona.png"
import { useNavigate } from 'react-router-dom'


const HeroSection = () => {
  const navigate = useNavigate();

    return (
        <>
            <section className="Hero-holder">
                <div className="Hero-holder-wrap">
                <div className="Hero-right">
                        <div className="image-url"><img src={barcelona} alt="TopImage" /></div>
                 </div>

                    <div className="Hero-left">
                        <h1 className="Hero-header-text">You Set the Level</h1>
                        <p className="Hero-header-p">WhiteBIT is one of the largest cryptocurrency platforms in Europe. We offer various products and tools to suit experienced traders and new market entrants. Triangular or triple arbitrage is the result of a price difference between the three currencies when exchange rates do not match. Such discrepancies are common in the cryptocurrency market. Using our software and powerful servers, we make arbitrage transactions within 1 exchange almost in real-time. Sign up and take part in this journey with us!</p>
                            <button className="hero-bttn" onClick={()=>navigate("/Signup")}>Join WhiteBIT</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection