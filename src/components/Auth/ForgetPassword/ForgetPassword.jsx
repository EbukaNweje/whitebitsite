import React, { useState } from 'react'
import { LoginContainer, LoginWrapper, LoginText,LoginHeader,
    LoginSubHeader,  LoginInputs, ForgetPasswordInpur, LoginBtn,

 } from './ForgetPasswordStyle'
 import FooterSection from '../../Footer/FooterSection'
 import LastFoter from '../../Footer/LastFoter'
 import { useNavigate } from 'react-router-dom'

function ForgetPassword () {
    // const [ref, setRef] = useState(false)
  const navigate = useNavigate();

  return (
    <>
    {/* <div style={{width:"100%", height:"8vh", background:"black"}}></div> */}
        <LoginContainer>
       <>
        <LoginWrapper>  
        <LoginText>
            <LoginHeader>Forgot password?</LoginHeader>
            <LoginSubHeader>If you want to recover your account password. Open your e-mail and follow the link to create a new password.</LoginSubHeader>
        </LoginText>
        <LoginInputs>
            <ForgetPasswordInpur placeholder='E-mail' type='text'/>

        </LoginInputs>
            <LoginBtn onClick={()=> navigate("/resetpassword")}>Continue</LoginBtn>
       </LoginWrapper>
      
       </>
       
    </LoginContainer>

    <FooterSection/>
    <LastFoter/>
    </>
    
  )
}

export default ForgetPassword