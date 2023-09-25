import styled from 'styled-components';
 
export const LoginContainer = styled.div`
    width: 100%;
    height: max-content;
    background-color: #F6F7F9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 7%;
`

export const LoginWrapper = styled.div`
    width: 32%;
    height: 85%;

@media(max-width: 999px) {
    width: 90%;
}

 @media screen  and (max-width: 900px){
       width: 90%;
}

@media(max-width: 476px) {
    width: 90%;
 }
`

export const LoginText = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    margin-top: 10px;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    font-family:  Inter, arial, sans-serif; 
`

export const LoginSure = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: flex-end;
    font-family:  Inter, arial, sans-serif; 
`

export const LoginSureSpan = styled.span`
    font-size:12px;
    color: #1D252FB3;

    @media(max-width: 999px) {
   margin-top: 4%;
}

 @media screen  and (max-width: 900px){
      margin-top: 4%;
}

@media(max-width: 476px) {
   margin-top: 4%;
 }
    
@media(max-width: 414px) {
   margin-top: 6%;
 }
    
`

export const LoginSureSite = styled.span`
    width:50%;
    height: 35%;
    background-color: #1d252f38;
    display: flex;
    padding-left: 10px;
    align-items: center;
    border-radius: 5px;
    font-size: 13px;
    color: black;
`

export const LoginHeader = styled.h1`
    font-size: 40px;
    margin-top: 5%;
`

export const LoginSubHeader = styled.span`
    font-size: 16px;
    color: #1D252FB3;
    margin: 4% 0px;
`

export const LoginRoute = styled.span`
    color: #246ACC;
    text-decoration: underline;
    cursor: pointer;
`

export const LoginInputs = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    font-family:  Inter, arial, sans-serif;
`

export const LoginEmail = styled.input`
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
    
    &:hover{
    border: 1px solid rgba(0, 0, 0, 0.200);
    }
    &:focus{
    border:1px solid  #EABD4E;
    }

    @media(max-width: 999px) {
 margin: 10px 0px;
}
 @media screen  and (max-width: 900px){
    margin: 10px 0px;
}
    
    
@media(max-width: 476px) {
 margin: 10px 0px;
 }
`

export const LoginBtn = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    background-color: #EABD4E;
    font-family:  Inter, arial, sans-serif;
    border-radius: 10px;
    outline: none;
    font-weight:500 ;
    color: #1D252FB3;
    margin-top: 5%;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: #fcc334;
        transition: all 250ms  ;
    }
`

export const Web3Btn = styled.button`
    width: 100%;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.100);
    background-color: white;
    font-family:  Inter, arial, sans-serif;
    border-radius: 10px;
    outline: none;
    font-weight:bold ;
    margin-top: 5%;
    color: #1D252FB3;
    font-size: 16px;
    font-weight: bold;

    &:hover{
        border: 1px solid rgba(0, 0, 0, 0.180);
    }
`
export const QRWrapper = styled.div`
    width: 34%;
    height: 55%;
    display: flex;
    margin-left: 10px;
    justify-content: flex-end;
    align-items: flex-start;

    @media(max-width: 999px) {
        display: none;
}
    
    
@media(max-width: 476px) {
    display: none;
 }

 @media screen  and (max-width: 414px){
      display: none;    
    }
`

export const QRCode = styled.div`
    width: 350px;
    height: 400px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const QRCodeTopEdges = styled.div`
    width: 20%;
    height: 15%;
    background-color: black;
    position: absolute;
    right: 0;
    top: 0;
`

export const QRCodeBotEdges = styled.div`
    width: 20%;
    height: 15%;
    background-color: black;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.180);
`

export const QRCodeWrapper = styled.div`
    width: 88%;
    height: 93%;
    background-color: black;
    border-radius: 15px;
    z-index: 999;
    left: 0;
    bottom: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const QRCodeImg = styled.img`
    width: 65%;
    height:55%;
    background-color: white;
`

export const QRCodeText = styled.div`
    width: 70%;
    height:20%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
`

export const QRCodeTextHeader = styled.span`
    font-size: 16px;
    font-family:  Inter, arial, sans-serif;
    font-weight: bold;

`
export const QRCodeTextPar = styled.span`
    font-size: 14px;
    font-family:  Inter, arial, sans-serif;
    color: #1D252FB3;
    font-weight: 500;
    line-height: 20px;
`

export const ForgotPasswordDiv = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 5% 0px;
`
export const ForgotPassword = styled.span`
    font-size: 16px;
    font-family:  Inter, arial, sans-serif;
    color:#246ACC;
    cursor: pointer;
`
export const ForgotPasswordLine = styled.span`
    width: 29%;
    height: 1.5px;
    background-color: #246ACC;
`

export const Agreement = styled.div`
    width: 100%;
    height: max-content;
    background-color: #F6F7F9;
    display: flex;
    justify-content: center;
`
export const AgreementSpan = styled.div`
    width: 64%;
    height: 50%;
    font-size: 14px;
    color: rgba(29, 37, 47, 0.7);
    font-family: Inter, arial, sans-serif;
    line-height: 21px;
    font-weight: 400;
    padding: 5%;
    @media screen  and (max-width: 900px){
       width: 100%;
}

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
`

export const SignupPassword = styled.input`
    width: 85%;
    height: 45px;
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