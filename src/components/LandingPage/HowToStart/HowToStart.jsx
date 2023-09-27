import React from "react";
import "../HowToStart/HowToStart.css";
import { useNavigate } from 'react-router-dom'


const HowToStart = () => {
  const navigate = useNavigate();
  return (
    <main className="main2">
      <div className="mainwrap">
        <div className="mainHeader">
          <h2>How To Start?</h2>
          <p>
            Crypto trading is exciting if you’re with the WhiteBIT
            cryptocurrency trading platform. Take a few steps to get started and
            check it out yourself.
          </p>
        </div>
        <div className="mainSteps">
          <div className="mainWraps">
            <div className="startSteps">
              <div className="step1">
                <span>Step 1</span>
              </div>
              <p>
                ..........................................................................................
              </p>
              <div className="step1">
                <span>Step 2</span>
              </div>
              <p>
                ........................................................</p>
              <p className="Step1P">.................................................................</p>
              <div className="step1">
                <span>Step 3</span>
              </div>
            </div>
            <div className="stepsInfo">
              <div className="stepsInfoWrap">
                <div className="stepInfoWrapText">
                  <p>Sign up</p>
                  <span>
                    Enter your email, create a password, and confirm your email.
                    We’ll send you the details to the address you indicated.
                  </span>
                </div>
                <div className="stepInfoWrapText">
                  <p>Verify the identity</p>
                  <span>
                    You should pass KYC (Know Your Customer) to enjoy all the
                    benefits.
                  </span>
                </div>
                <div className="stepInfoWrapText3">
                  <p>Top up the balance and start trading!</p>
                  <span>
                   Use your Crypto wallet or another payment method to make the first deposit to your personal trading account for a start
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="stepsInfo2">
            <div className="stepsInfoBox">
              <div className="stepsInfoBoxText">
                <p>Start with WhiteBIT</p>
                <p className="CryptoInfo">
                  Your crypto journey starts with WhiteBIT, so grab the bull by
                  the horns! Sign up and get access to all the features for
                  efficient trading right now. Let's set the level together!
                </p>
                <button onClick={()=>navigate("/Signup")}>Register</button>
              </div>
              {/* <div className="stepsInfoBoxButton">
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HowToStart;
