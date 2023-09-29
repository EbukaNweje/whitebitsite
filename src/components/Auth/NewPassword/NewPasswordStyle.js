import styled from 'styled-components';
 
export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F6F7F9;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 999px) {
       padding-top: 20%;
       width: 100%
}
    
    
@media(max-width: 476px) {
   padding-top: 20%;
   width: 100%
 }

 @media screen  and (max-width: 414px){
     padding-top: 20%;
     width: 100%    
    }
`

export const LoginWrapper = styled.div`
    width: 32%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 999px) {
       width: 90%;
}
    
    
@media(max-width: 476px) {
   width: 90%;
 }

 @media screen  and (max-width: 414px){
     width: 90%;    
    }
`

export const LoginText = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    margin-top: 10px;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    font-family:  Inter, arial, sans-serif; 
`
export const LoginHeader = styled.h1`
    font-size: 43px;
`

export const LoginSubHeader = styled.span`
    font-size: 16px;
    color: #1D252FB3;
    font-weight: bold;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.5);
`

export const LoginInputs = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    font-family:  Inter, arial, sans-serif;

    @media(max-width: 999px) {
       width: 90%;
}
    
@media(max-width: 476px) {
   width: 90%;
 }

 @media screen  and (max-width: 414px){
     width: 90%;    
    }
`

export const NewPasswordInput = styled.input`
    width: 100%;
    height: 55px;
    border: 1px solid rgba(0, 0, 0, 0.100);
    background-color: white;
    font-family:  Inter, arial, sans-serif;
    border-radius: 10px;
    outline: none;
    font-weight:500 ;
    font-size: 17px;
    padding-inline: 20px;
    
    &:hover{
    border: 1px solid rgba(0, 0, 0, 0.200);
    }
    &:focus{
    border:1px solid  #EABD4E;
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
