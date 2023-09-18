import React, { useState } from 'react'
import './Login.css'
import { LoginContainer, LoginWrapper, LoginText,LoginHeader,
    LoginSubHeader, LoginRoute, LoginInputs, LoginEmail, LoginBtn,
    Web3Btn, QRWrapper, QRCode, QRCodeTopEdges, QRCodeBotEdges,
    QRCodeWrapper, LoginSure, QRCodeImg, QRCodeText, QRCodeTextHeader,
    QRCodeTextPar, ForgotPassword, ForgotPasswordDiv, ForgotPasswordLine,
     Agreement, AgreementSpan, LoginSureSpan, LoginSureSite, PasswordDiv, SignupPassword

 } from './LoginStyle'
 import {AiFillEye} from "react-icons/ai"
 import { useNavigate } from 'react-router-dom'


function Login() {
    const [ref, setRef] = useState(false)
    const [show, setShow] = useState(true)
  const navigate = useNavigate();


  return (
    <>
    <div style={{width:"100%", height:"8vh",}}></div>
        <LoginContainer>
       <>
        <LoginWrapper>  
        <LoginSure>
            <LoginSureSpan>Please make sure you are using the official site</LoginSureSpan>
            <LoginSureSite>https://whitebit.org</LoginSureSite>
        </LoginSure>
        <LoginText>
            <LoginHeader>Log In</LoginHeader>
            <LoginSubHeader>Don't have an account? <LoginRoute onClick={()=>navigate("/Signup")}>  Create account</LoginRoute></LoginSubHeader>
        </LoginText>
        <LoginInputs>
            <LoginEmail placeholder='E-mail' type='text'/>
         <PasswordDiv>
        <SignupPassword placeholder='Password' type={show? "password":"text"}/>
            <AiFillEye className={show? "PasswordShow" : "PasswordHide"} onClick={()=>setShow(!show)}/>
        </PasswordDiv>
        </LoginInputs>
            <LoginBtn>Continue</LoginBtn>
            <Web3Btn>Log in with Web3</Web3Btn>
            <ForgotPasswordDiv>
                <ForgotPassword>Forgot password?</ForgotPassword>
                <ForgotPasswordLine></ForgotPasswordLine>
            </ForgotPasswordDiv>
       </LoginWrapper>
       <QRWrapper >
        <QRCode>
            <QRCodeTopEdges></QRCodeTopEdges>
            <QRCodeWrapper>
                <QRCodeImg src='https://bff.whitebit.com/v1/canvas/qr?url=rdrs.whitebit.com/app&correctionLevel=H' />
                <QRCodeText>
                    <QRCodeTextHeader>Log in with QR code</QRCodeTextHeader>
                    <QRCodeTextPar>Scan this code with the WhiteBIT mobile app to log in</QRCodeTextPar>
                </QRCodeText>
            </QRCodeWrapper>
            <QRCodeBotEdges></QRCodeBotEdges>
        </QRCode>
       </QRWrapper>
       </>
       
    </LoginContainer>
    <Agreement>
        <AgreementSpan>The use of the WhiteBIT website is prohibited for citizens and/or residents of the following countries (territories): Afghanistan, Territory of Guam, Iran, Yemen, Libya, State of Palestine, Puerto Rico, Somalia, the Democratic People’s Republic of Korea, The Northern Mariana Islands, Syria, Russian Federation, Republic of Belarus, Republic of Sudan, Transnistria, temporarily occupied territories of Turkish Republic of Northern Cyprus, Western Sahara, Federal Republic of Ambazonia, Kosovo, South Sudan, Nicaragua, Trinidad and Tobago, Venezuela, and temporarily occupied territories of Ukraine.</AgreementSpan>
    </Agreement>

    
    </>
    
  )
}

export default Login