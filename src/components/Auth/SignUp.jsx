import React, { useState } from 'react'
import './Login.css'
import { SignupContainer, SignupWrapper, SignupText,SignupHeader,
    SignupSubHeader, LoginRoute, SignupInputs, SignupEmail,
    SignupValidation, CharValidation, LowerValidation, CapValidation,
    NumValidation, SymValidation, ValidationImg, SignupRef, RefImg,
    SignupRefHeader, SignupPrivacy, SignupCheck, Privacy, SignupBtn,SignupRefHeaderDiv,
    PasswordDiv, SignupPassword

 } from './Login'
 import {AiFillEye} from "react-icons/ai"
 import { useNavigate } from 'react-router-dom'


const Signup = () => {
const [ref, setRef] = useState(false)
const [show, setShow] = useState(true)
const navigate = useNavigate();

  return (
    <>
         {/* <div style={{width:"100%", height:"8vh", background:"black"}}></div> */}
         <SignupContainer>
       <SignupWrapper>  
        <SignupText>
            <SignupHeader>Create account</SignupHeader>
            <SignupSubHeader>Already have an account? <LoginRoute onClick={()=>navigate("/login")}> Log In</LoginRoute></SignupSubHeader>
        </SignupText>
        <SignupInputs>
            <SignupEmail placeholder='E-mail' type='text'/>
        <PasswordDiv>
        <SignupPassword placeholder='Password' type={show? "password":"text"}/>
            <AiFillEye className={show? "PasswordShow" : "PasswordHide"} onClick={()=>setShow(!show)}/>
        </PasswordDiv>
        </SignupInputs>
        <SignupValidation>
            <CharValidation>8+ Characters <ValidationImg src="https://cdn.whitebit.com/static/img/ui-kit/24px/info.svg" alt="" /></CharValidation>
            <LowerValidation>Lowercase</LowerValidation>
            <CapValidation>Capital</CapValidation>
            <NumValidation>Number</NumValidation>
            <SymValidation>Symbol <ValidationImg src="https://cdn.whitebit.com/static/img/ui-kit/24px/info.svg" alt="" /></SymValidation>
        </SignupValidation>
        <SignupRef>
            <SignupRefHeader>
            I have the referral ID <RefImg className={ref?'rot':null} onClick={()=>setRef(!ref)} src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' />
            </SignupRefHeader>

        </SignupRef>

        <SignupRefHeaderDiv>
            {
                ref?<SignupEmail style={{width:"100%", marginBottom: "5%"}} placeholder='Code' type='text'/>:null
            }   
        </SignupRefHeaderDiv>
            <SignupPrivacy><SignupCheck type='checkbox'/>I agree to the <Privacy>User agreement</Privacy> and <Privacy>Privacy policy</Privacy></SignupPrivacy>
            <SignupPrivacy><SignupCheck style={{width:"60px",}} type='checkbox'/><span style={{ marginLeft:"-11px"}}>I hereby confirm that I am neither a citizen nor a resident of the following countries:</span></SignupPrivacy>
            <SignupBtn>Continue</SignupBtn>
       </SignupWrapper>
    </SignupContainer>
    </>
  )
}

export default Signup