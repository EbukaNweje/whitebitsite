import React, { useState } from 'react'
import { LoginContainer, LoginWrapper, LoginText,LoginHeader,
    LoginInputs, NewPasswordInput, LoginBtn,

 } from './NewPasswordStyle'

 import FooterSection from '../../Footer/FooterSection'
 import LastFoter from '../../Footer/LastFoter'

function NewPassword () {
  return (
    <>
    {/* <div style={{width:"100%", height:"8vh", background:"black"}}></div> */}
        <LoginContainer>
       <>
        <LoginWrapper>  
        <LoginText>
            <LoginHeader>New password?</LoginHeader>
            {/* <LoginSubHeader></LoginSubHeader> */}
        </LoginText>
        <LoginInputs>
            <NewPasswordInput placeholder='password' type='text'/>
            <NewPasswordInput placeholder='Confirm Password' type='password'/>
        </LoginInputs>
            <LoginBtn>Change</LoginBtn>
       </LoginWrapper>
      
       </>
       
    </LoginContainer>

    <FooterSection/>
    <LastFoter/>
    
    </>
    
  )
}

export default NewPassword