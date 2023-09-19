import React, { useState } from 'react'
import './Login.css'
import { SignupContainer, SignupWrapper, SignupText,SignupHeader,
    SignupSubHeader, LoginRoute, SignupInputs, SignupEmail,
    SignupValidation, CharValidation, LowerValidation, CapValidation,
    NumValidation, SymValidation, ValidationImg, SignupRef, RefImg,
    SignupRefHeader, SignupPrivacy, SignupCheck, Privacy, SignupBtn,SignupRefHeaderDiv,
    PasswordDiv, SignupPassword, Erro

 } from './Login'
 import {AiFillEye} from "react-icons/ai"
 import { useNavigate } from 'react-router-dom'
 import {BeatLoader} from "react-spinners"
//  import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
// import AOS from 'aos'
// import 'aos/dist/aos.css'


const Signup = () => {
const [ref, setRef] = useState(false)
const [show, setShow] = useState(true)
// const [vali, setVali] = useState(false)
const [email, setEmail] = useState()
const [password, setPassword] = useState("")
const navigate = useNavigate();
const [passwordError, setPasswordError] = useState();
const [passwordErrorlow, setPasswordErrorLow] = useState("");
const [passwordErrorUpper, setPasswordErrorUpper] = useState();
const [passwordErrorNumber, setPasswordErrorNumber] = useState();
const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();
const [emailError, setEmailError] = useState('');
const [error, setError] = useState('');
const [isButtonDisabled, setButtonDisabled] = useState(false);

const validateEmail = (input) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const containsLowercase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[a-z]/.test(input);
  };
  const containsUpperrcase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[A-Z]/.test(input);
  };

  const containsNumber = (input) => {
    // Check if the input string contains at least one number
    return /\d/.test(input);
  };

  const containsSymbol = (input) => {
    // Check if the input string contains at least one symbol (special character)
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate the email
    if(newEmail.trim() === '') {
        setEmailError('Email is required');
    }else if (!validateEmail(newEmail)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

const handlePasswordChange = (e) => {
  const newPassword = e.target.value;
  setPassword(newPassword);

  // Validate the password
  if (newPassword.length < 8) {
    setPasswordError(true);
  } else {
    setPasswordError(false);
  }

  if (!containsLowercase(newPassword)) {
    setPasswordErrorLow(true);
  } else {
    setPasswordErrorLow(false);
  }
  if (!containsNumber(newPassword)) {
    setPasswordErrorNumber(true);
  } else {
    setPasswordErrorNumber(false);
  }

  if (!containsUpperrcase(newPassword)) {
    setPasswordErrorUpper(true);
  } else {
    setPasswordErrorUpper(false);
  }

  if (!containsSymbol(newPassword)) {
    setPasswordErrorSymbol(true);
  } else {
    setPasswordErrorSymbol(false);
  }
};

console.log("p",passwordError, "PE", passwordErrorlow, "Pu", passwordErrorUpper, "Pn", passwordErrorNumber, "pS", passwordErrorSymbol)
   // Function to handle button state changes
   const handleButtonClick = () => {
    if(emailError === "Email is required"){
        setError("Email is required")
    }else if(emailError === "Invalid email format"){
        console.log("Invalid email format")
    }
    else if (passwordError === false && passwordErrorlow === false && passwordErrorUpper  === false && passwordErrorNumber === false && passwordErrorSymbol === false) {
        // Perform form submission logic here
        console.log('submitted to Api');
        setButtonDisabled(!isButtonDisabled);
      }else {
        setError('Form validation failed');
      }
  };

  return (
    <>
         {/* <div style={{width:"100%", height:"8vh", background:"black"}}></div> */}
         <SignupContainer>
       <SignupWrapper>
            {error === "" ? null : <Erro><span>{error}</span> <div style={{marginRight: "5%", fontSize: "18px", fontWeight: "700", cursor: "pointer"}} onClick={()=>setError("")}>X</div></Erro>}
        <SignupText>
            <SignupHeader>Create account</SignupHeader>
            <SignupSubHeader>Already have an account? <LoginRoute onClick={()=>navigate("/login")}> Log In</LoginRoute></SignupSubHeader>
        </SignupText>
        <SignupInputs>
            <SignupEmail placeholder='E-mail' type='text' value={email}  onChange ={handleEmailChange}/>
            <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{emailError}</p>
        <PasswordDiv>
        <SignupPassword placeholder='Password' type={show? "password":"text"} value={password}  onChange ={handlePasswordChange}/>
            <AiFillEye className={show? "PasswordShow" : "PasswordHide"} onClick={()=>setShow(!show)}/>
        </PasswordDiv>
        </SignupInputs>
        <SignupValidation>
            <CharValidation style={{color: `${passwordError ? "white" : "gray"}`, backgroundColor: `${passwordError ? "red" : "#E0E0E5"}`, display: `${password.length >= 8 ? "none" : "flex"}` }}>8+ Characters <ValidationImg src="https://cdn.whitebit.com/static/img/ui-kit/24px/info.svg" alt="" /></CharValidation>
            <LowerValidation style={{color: `${passwordErrorlow === "" ? "gray" : "white"}`, backgroundColor: `${passwordErrorlow === "" ? "#E0E0E5" : "red"}`, display: `${passwordErrorlow === false ? "none" : "flex"}` }}>Lowercase</LowerValidation>
            <CapValidation style={{color: `${passwordErrorUpper ? "white" : "gray"}`, backgroundColor: `${passwordErrorUpper ? "red" : "#E0E0E5"}`, display: `${passwordErrorUpper === false ? "none" : "flex"}` }}> Capital</CapValidation>
            <NumValidation style={{color: `${passwordErrorNumber ? "white" : "gray"}`, backgroundColor: `${passwordErrorNumber ? "red" : "#E0E0E5"}`, display: `${passwordErrorNumber === false ? "none" : "flex"}` }}>Number</NumValidation>
            <SymValidation style={{color: `${passwordErrorSymbol ? "white" : "gray"}`, backgroundColor: `${passwordErrorSymbol ? "red" : "#E0E0E5"}`, display: `${passwordErrorSymbol === false ? "none" : "flex"}` }}>Symbol <ValidationImg src="https://cdn.whitebit.com/static/img/ui-kit/24px/info.svg" alt="" /></SymValidation>
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
            <SignupBtn
                 onClick={handleButtonClick}
                 disabled={isButtonDisabled} 
                 style={{background: `${isButtonDisabled ? "#E0E0E5" : "#EABD4E"}`}}// Set the disabled attribute
            >{isButtonDisabled ? <BeatLoader color="#8d8f8f"/>: "Continue"}</SignupBtn>
       </SignupWrapper>
    </SignupContainer>
    </>
  )
}

export default Signup