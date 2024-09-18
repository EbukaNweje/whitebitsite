import React, { useState } from 'react'
import './Login.css'
import { SignupContainer, SignupWrapper, SignupText,SignupHeader,
    SignupSubHeader, LoginRoute, SignupInputs, SignupEmail,
    SignupValidation, CharValidation, LowerValidation, CapValidation,
    NumValidation, SymValidation, ValidationImg, SignupRef, RefImg,
    SignupRefHeader, SignupPrivacy, SignupCheck, Privacy, SignupBtn,SignupRefHeaderDiv,
    PasswordDiv, SignupPassword, Erro, IdBox, SignupSelete

 } from './Login'
 import {AiFillEye} from "react-icons/ai"
 import { useNavigate } from 'react-router-dom'
 import {BeatLoader} from "react-spinners"
 import Footer from "../Footer/FooterSection"
import LastFoter from '../Footer/LastFoter';
import axios from 'axios'
import { alluserdata }from "../Global/ProductState"
import { useDispatch } from "react-redux";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Dropzone from "react-dropzone";
import { FiDownloadCloud } from "react-icons/fi";
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
const [fullName, setFullName] = useState()
const [userName, setUsername] = useState()
const [phoneNumber, setPhoneNumber] = useState()
const [address, setAddress] = useState()
const [counrty, setCounrty] = useState()
const navigate = useNavigate();
const [counrtyError, setCounrtyError] = useState();
const [addressError, setAddressError] = useState();
const [ffullNameError, setFullNameErrorr] = useState();
const [phoneNumberError, setPhoneNumberError] = useState();
const [passwordError, setPasswordError] = useState();
const [passwordErrorlow, setPasswordErrorLow] = useState("");
const [passwordErrorUpper, setPasswordErrorUpper] = useState();
const [passwordErrorNumber, setPasswordErrorNumber] = useState();
const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();
const [emailError, setEmailError] = useState('');
const [usernameError, setUsernameError] = useState('');
const [error, setError] = useState({ero: false, msg: ""});
const [isButtonDisabled, setButtonDisabled] = useState(false);
const [dropzone, setDropzone] = useState()

const dispatch = useDispatch()

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
  const handleUsername = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    // Validate the email
    if(newUsername.trim() === '') {
        setUsernameError('Username is required');
    }else {
      setUsernameError('');
    }
  };
  const handleFullnameChange = (e) => {
    const newFullName = e.target.value;
    setFullName(newFullName);
    // Validate the email
    if(newFullName.trim() === '') {
        setFullNameErrorr('Fullname is required');
    }else {
      setFullNameErrorr('');
    }
  };
  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    // Validate the email
    if(newPhoneNumber.trim() === '') {
        setPhoneNumberError('Phone Number is required');
    }else {
      setPhoneNumberError('');
    }
  };
  const handleAddressChange = (e) => {
    const newAdddress = e.target.value;
    setAddress(newAdddress);
    // Validate the email
    if(newAdddress.trim() === '') {
        setAddressError(' Address is required');
    }else {
      setAddressError('');
    }
  };
  const handlCounrtyChange = (e) => {
    const country = e.target.value;
    setCounrty(country);
    // Validate the email
    if(country.trim() === '') {
        setCounrtyError('Country is required');
    }else {
      setCounrtyError('');
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
   
   const data =  {email, userName, password, fullName, counrty, phoneNumber, imageId: dropzone}  

   

   const url = "https://white-bit-back-endnew.vercel.app/api/register"

   const urll = "https://webtext-qigk.onrender.com/api/signupemailsand"

   const signupEmailSand = () => {
     axios.post(urll, {email})
     .then(res => {
       console.log(res)
     }).catch((err)=>{
       console.log(err)
     })
   }

   const handleButtonClick = () => {
    if(emailError === "Email is required"){
        setError({ero: true, msg: "Email is required"})
        setTimeout(() => {
          setError({ero: false})
        }, [3000]);
    }else if(emailError === "Invalid email format"){
        // console.log("Invalid email format")
        setError({ero: true, msg: "Invalid email format"})
        setTimeout(() => {
          setError({ero: false})
        }, [3000]);
    }else if(!email){
      setError({ero: true, msg: "Email is required"})
        setTimeout(() => {
          setError({ero: false})
        }, [3000]);
    }    
      else if(!userName){
      setError({ero: true, msg: "Username is required"})
        setTimeout(() => {
          setError({ero: false})
        }, [3000]);
    }    
    else if (passwordError === false && passwordErrorlow === false && passwordErrorUpper  === false && passwordErrorNumber === false && passwordErrorSymbol === false) {
      setButtonDisabled(!isButtonDisabled);
      console.log(data)

      let formData = new FormData();
      formData.append("email", email);
      formData.append("userName", userName);
      formData.append("password", password);
      formData.append("fullName", fullName);
      formData.append("counrty", counrty);
      formData.append("phoneNumber", phoneNumber);
      formData.append("imageId",  dropzone);
      
      const config = {
        headers: {
          "content-type": "multipart/formData"
        }
      }


      axios.post(url, formData, config)
        .then((res) => {
        localStorage.setItem("User", JSON.stringify(res.data));
        signupEmailSand()
        const getId = JSON.parse(localStorage.getItem("User"))
        dispatch(alluserdata(res.data.data))
        console.log("this is the data", getId.data._id)
          setTimeout(() => {
            window.location = `https://whitebitcrypfield-dashboard.vercel.app/#/${getId.data._id}`
            // navigate(`/userDashboard/${getId.data._id}`)
            // navigate(`/verify/${getId.data._id}`)
            console.log(getId._id);
          }, [2000]);
        }
        )
        .catch((error)=>{
          console.log(error);
          setButtonDisabled(isButtonDisabled);
          setError({ero: true, msg: error.data.message})
      });
      
      // Perform form submission logic here
        // console.log('submitted to Api');
        // setButtonDisabled(!isButtonDisabled);
        // console.log(email, password, username)
        // navigate("/userDashboard")
      }else {
        setError({ero: true, msg: "Form validation failed"});
        setTimeout(() => {
          setError({ero: false})
        }, [3000]);
      }
  };



  

  const addFilesToDropzone = (files)=> {
    let files_with_preview = [];
    files.map(file => {
      file["preview"] = URL.createObjectURL(file);
      files_with_preview.push(file);
    });

    const new_files = [...files_with_preview];
    setDropzone(new_files[0]?.preview);
  }

console.log("this is it",dropzone)


  return (
    <>
         {/* <div style={{width:"100%", height:"8vh", background:"black"}}></div> */}
         <SignupContainer>
       <SignupWrapper>
            {error.ero ? <Erro><span>{error.msg}</span> <div style={{marginRight: "5%", fontSize: "18px", fontWeight: "700", cursor: "pointer", animation: "backOutUp", animationDirection:"1s"}} onClick={()=>setError("")}>X</div></Erro>: null}
        <SignupText>
            <SignupHeader>Create account</SignupHeader>
            <SignupSubHeader>Already have an account? <LoginRoute onClick={()=>navigate("/login")}> Log In</LoginRoute></SignupSubHeader>
        </SignupText>
            <div className='Upload'> Upload Means of Identification</div>
        <SignupInputs>
            <SignupEmail placeholder='Fullname' type='text' value={fullName}  onChange ={handleFullnameChange}/>
            <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{ffullNameError}</p>
            <SignupEmail placeholder='E-mail' type='email' value={email}  onChange ={handleEmailChange}/>
            <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{emailError}</p>
            <SignupEmail placeholder='Username' type='text' value={userName}  onChange ={handleUsername}/>
            <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{usernameError}</p>
            {/* <SignupEmail placeholder='Phone Number' type='text' value={phoneNumber}  onChange ={handlePhoneNumberChange}/>
            <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{phoneNumberError}</p> */}
            {/* <SignupEmail placeholder='Address' type='text' value={address}  onChange ={handleAddressChange}/>
            <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{addressError}</p> */}
            {/* <SignupSelete type='text' value={counrty}  onChange ={handlCounrtyChange}>
                <option>Your Country</option>
                <option>1</option>
                <option>2</option>
                <option>4</option>
            </SignupSelete>
            <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{counrtyError}</p> */}
            {/* <SignupSelete type='text' value={userName}  onChange ={handleUsername}>
                <option>Your State / Province</option>
                <option>1</option>
                <option>2</option>
                <option>4</option>
            </SignupSelete>
            <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{usernameError}</p> */}
        <PasswordDiv>
        <SignupPassword placeholder='Password' type={show? "password":"text"} value={password}  onChange ={handlePasswordChange}/>
            <AiFillEye className={show? "PasswordShow" : "PasswordHide"} onClick={()=>setShow(!show)}/>
        </PasswordDiv>
        </SignupInputs>
        <SignupValidation>
            <Tippy content={<span style={{fontSize: "12px", fontFamily:"Inter, arial, sans-serif", fontWeight:"700"}}>You can use only latin characters</span>}>
            <CharValidation style={{color: `${passwordError ? "white" : "gray"}`, backgroundColor: `${passwordError ? "red" : "#E0E0E5"}`, display: `${password.length >= 8 ? "none" : "flex"}` }}>8+ Characters <ValidationImg src="https://cdn.whitebit.com/static/img/ui-kit/24px/info.svg" alt="" /></CharValidation>
            </Tippy>
            <LowerValidation style={{color: `${passwordErrorlow === "" ? "gray" : "white"}`, backgroundColor: `${passwordErrorlow === "" ? "#E0E0E5" : "red"}`, display: `${passwordErrorlow === false ? "none" : "flex"}` }}>Lowercase</LowerValidation>
            <CapValidation style={{color: `${passwordErrorUpper ? "white" : "gray"}`, backgroundColor: `${passwordErrorUpper ? "red" : "#E0E0E5"}`, display: `${passwordErrorUpper === false ? "none" : "flex"}` }}> Capital</CapValidation>
            <NumValidation style={{color: `${passwordErrorNumber ? "white" : "gray"}`, backgroundColor: `${passwordErrorNumber ? "red" : "#E0E0E5"}`, display: `${passwordErrorNumber === false ? "none" : "flex"}` }}>Number</NumValidation>
            <Tippy content={<span style={{fontSize: "12px", fontFamily:"Inter, arial, sans-serif", fontWeight:"700"}}>Spacial characters to use:!"#$%&'()*+,-./:;=?@[\]^_`</span>}>
            <SymValidation style={{color: `${passwordErrorSymbol ? "white" : "gray"}`, backgroundColor: `${passwordErrorSymbol ? "red" : "#E0E0E5"}`, display: `${passwordErrorSymbol === false ? "none" : "flex"}` }}>Symbol <ValidationImg src="https://cdn.whitebit.com/static/img/ui-kit/24px/info.svg" alt="" /></SymValidation>
            </Tippy>
        </SignupValidation>
        {/* <SignupEmail placeholder='Your Referrer Code' type='text' value={userName}  onChange ={handleUsername}/>
            <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{usernameError}</p> */}
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
            <SignupPrivacy><SignupCheck type='checkbox'/>I agree to the <Privacy onClick={()=>navigate("/privacy")}>User agreement</Privacy> and <Privacy onClick={()=>navigate("/privacy")}>Privacy policy</Privacy></SignupPrivacy>
            <SignupPrivacy><SignupCheck style={{width:"60px",}} type='checkbox'/><span style={{ marginLeft:"-11px", color: "rgba(29, 37, 47, 0.7)"}}>I hereby confirm that I am neither a citizen nor a resident of the following countries: 
            <Tippy style={{backgroundColor:"white"}} content={<span style={{fontSize: "12px", fontFamily:"Inter, arial, sans-serif", fontWeight:"500", color:"white" }}>Afghanistan, Territory of Guam, Iran, Yemen, Libya, State of Palestine, Puerto Rico, Somalia, the Democratic People’s Republic of Korea, The Northern Mariana Islands, Syria, Russian Federation, Republic of Belarus, Republic of Sudan, Transnistria, temporarily occupied territories of Turkish Republic of Northern Cyprus, Western Sahara, Federal Republic of Ambazonia, Kosovo, South Sudan, Nicaragua, Trinidad and Tobago, Venezuela, and temporarily occupied territories of Ukraine.</span>}>
            <ValidationImg src="https://cdn.whitebit.com/static/img/ui-kit/24px/info.svg" alt="" />
            </Tippy>
            </span>
            </SignupPrivacy>
            <SignupBtn
                 onClick={handleButtonClick}
                 disabled={isButtonDisabled} 
                 style={{background: `${isButtonDisabled ? "#E0E0E5" : "#EABD4E"}`}}// Set the disabled attribute
            >{isButtonDisabled ? <BeatLoader color="#8d8f8f"/>: "Continue"}</SignupBtn>
       </SignupWrapper>
    </SignupContainer>
    <Footer/>
    <LastFoter/>
    </>
  )
}

export default Signup