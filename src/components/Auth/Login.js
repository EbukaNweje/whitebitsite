import styled from 'styled-components';
 
export const SignupContainer = styled.div`
width: 100%;
height: max-content;
background-color: #F6F7F9;
display: flex;
justify-content: center;
align-items: center;
padding-top: 8%;
padding-bottom: 5%;
@media screen  and (max-width: 900px){
    padding-top: 30%;
}

@media screen  and (max-width: 476px){
    padding-top: 20%;
}

@media screen  and (max-width: 414px){
      padding-top: 30%;
}
`

export const SignupWrapper = styled.div`
width: 32%;
height: 85%;
/* padding-block : %; */
/* background-color: red; */

@media screen  and (max-width: 900px){
    width: 90%;
}
`

export const SignupText = styled.div`
width: 100%;
height: 25%;
display: flex;
margin-top: 5px;
gap: 24px;
flex-direction: column;
justify-content: center;
font-family:  Inter, arial, sans-serif; 

@media(max-width: 999px) {
    width: 100%;
    margin-top: 20%;
    gap: 15px;
}
    
    
@media(max-width: 476px) {
    width: 100%;
    margin-top: 20%;
    gap: 15px;
 }

@media screen  and (max-width: 414px){
    width: 100%;
    margin-top: 20%;
    gap: 15px;
}

`

export const SignupHeader = styled.h1`
    font-size: 40px;
    font-family: Inter, arial, sans-serif;
    font-weight: 700;
    line-height: 60px;
    color: #000;

    @media screen  and (max-width: 414px){
        font-size: 35px;
        margin-top: -40px;
}

@media(max-width: 999px) {
    font-size: 35px;
    margin-top: -40px;
}
    
    
@media(max-width: 476px) {
    font-size: 35px;
 }
`

export const SignupSubHeader = styled.span`
    font-size: 16px;
    color: #1D252FB3;
    margin-bottom: 6%;
     @media screen  and (max-width: 414px){
}
`

export const LoginRoute = styled.span`
    color: #246ACC;
    text-decoration: underline;
    cursor: pointer;
`

export const SignupInputs = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    font-family:  Inter, arial, sans-serif;
    /* background: #000; */

    @media screen  and (max-width: 900px){
       width: 100%;
       margin: 10px 0px;
}
`

export const SignupEmail = styled.input`
    width: 98%;
    height: 50px;
    border: 1px solid lightgray;
    background-color: white;
    font-family:  Inter, arial, sans-serif;
    border-radius: 10px;
    outline: none;
    font-weight:500 ;
    font-size: 17px;
    padding-left: 10px;
    margin-bottom: 0px;
    
    &:hover{
    border: 1px solid rgba(0, 0, 0, 0.200);
    }
    &:focus{
    border:1px solid  #EABD4E;
    }
`
export const SignupRefHeaderDiv = styled.div`
 @media screen  and (max-width: 414px){
       width: 90%;
}
`
export const SignupValidation = styled.div`
    width: 100%;
    height: 7%;
    display: flex;
    gap: 10px;
    /* background-color: red; */
    font-family:  Inter, arial, sans-serif;
    padding: 5px;
    align-items: center;
    @media screen  and (max-width: 414px){
        width: 100%;
        /* background: #000; */
        flex-wrap: wrap;
}

@media(max-width: 999px) {
    width: 100%;
    flex-wrap: wrap;
}
    
    
@media(max-width: 476px) {
    width: 100%;
    flex-wrap: wrap;
 }
`

export const CharValidation = styled.div`
    padding-inline:3px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 63%;
    font-size: 10px;
    font-family:  Inter, arial, sans-serif;
    background-color: #E0E0E5;
    color: #1D252FB3;
    width: max-content;
    padding: 5px;
`
export const LowerValidation = styled.div`
    padding-inline: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 63%;
    font-size: 12px;
    font-family:  Inter, arial, sans-serif;
    background-color: #E0E0E5;
    color: #1D252FB3;
    padding: 5px;

`
export const CapValidation = styled.div`
    padding-inline: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 63%;
    font-size: 12px;
    font-family:  Inter, arial, sans-serif;
    background-color: #E0E0E5;
    color: #1D252FB3;
    padding: 5px;

`
export const NumValidation = styled.div`
    padding-inline: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 63%;
    font-size: 12px;
    font-family:  Inter, arial, sans-serif;
    background-color: #E0E0E5;
    color: #1D252FB3;
    padding: 5px;

`
export const SymValidation = styled.div`
    padding-inline: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 63%;
    font-size: 12px;
    font-family:  Inter, arial, sans-serif;
    background-color: #E0E0E5;
    color: #1D252FB3;
    padding: 5px;

`
export const ValidationImg = styled.img`
    margin-left: 5px;
    /* height: 20%; */
    width: 15px;
`
export const RefImg = styled.img`
    cursor: pointer;
    transition: all 350ms;
`

export const SignupRef = styled.div`
    width: 100%;
    height: 10%;
    margin: 5% 0px;
`

export const SignupRefHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
`

export const SignupPrivacy = styled.div`
    width: 100%;
    height: 7%;
    color: #1D252FB3;
    font-family:  arial, sans-serif;
    font-size: 16px;
    display: flex;
    gap: 5px;
    /* justify-content: space-between; */
    align-items: center;
    margin: 5% 0px;
    line-height: 24px;

    @media screen  and (max-width: 414px){
       width: 100%;
       font-size: 13px;
       /* margin: 0px; */
}
`

export const SignupCheck= styled.input`
    width: 20px;
    cursor: pointer;
    height: 20px;
    border-radius: 10px;

    @media screen  and (max-width: 414px){
       width: 20px;
}
    
`

export const Privacy = styled.span`
    font-size: 16px;
    color:#246ACC;
    cursor:pointer;
`

export const SignupBtn = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    background-color: #EABD4E;
    font-family:  Inter, arial, sans-serif;
    border-radius: 10px;
    outline: none;
    font-weight:500 ;
    margin-top: 5%;
    font-size: 16px;
    font-weight: 600;
    color: black;
`

export const PasswordDiv = styled.div`
    width: 100%;
    height: 50px;
    /* border: 1px solid lightgray; */
    background-color: white;
    font-family:  Inter, arial, sans-serif;
    border-radius: 10px;
    outline: none;
    font-weight:500 ;
    font-size: 17px;
    /* padding-left: 20px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.200);

     &:hover{
        border:1px solid  #EABD4E;
    }
    /* &:focus{
    border:1px solid  #EABD4E;
    } */

    @media screen  and (max-width: 900px){
       margin: 10px 0px;
}
`

export const SignupPassword = styled.input`
    width: 85%;
    height: 40px;
    border: none;
    background-color: white;
    font-family:  Inter, arial, sans-serif;
    border-radius: 10px;
    outline: none;
    font-weight:500 ;
    font-size: 17px;
    padding-left: 10px;
    
    /* &:hover{
    border: 1px solid rgba(0, 0, 0, 0.200);
    }
    &:focus{
    border:1px solid  #EABD4E;
    } */
`

export const Erro = styled.div`
    width: 100%;
    height: 7vh;
    background: red;
    color: white;
    font-size: 15px;
    display: flex;
    align-items: center;
    font-family:  Inter, arial, sans-serif;
    padding-left: 10px;
    justify-content: space-between;
    transition: margein-top all 350ms ease-in;
    animation: backInDown;
    animation-duration: 1s;
   
    @media(max-width: 476px) {
    height: 10vh;
 }

 @media screen  and (max-width: 414px){
     height: 6vh;
}
`