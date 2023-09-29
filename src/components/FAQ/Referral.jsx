import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Footer from "../Footer/FooterSection"
import LastFoter from '../Footer/LastFoter';
import Ten from "./introImgNew.png"

const Referral = () => {
const nav = useNavigate()
  return (
    <>
    <Main>
        <BigImg src={Ten} alt="Referral"/>
        <H1>Referral program</H1>
        <P>Get up to 10% of every trading fee paid by the users who sign up via your referral link</P>

        <Button onClick={()=>nav("/login")}>Get referral link</Button>
    </Main>
    <Footer/>
    <LastFoter/>
    </>
  )
}

export default Referral

const Main = styled.div`
 width: 100%;
 height: 100vh;
 background: #101014;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`

const BigImg = styled.img`
    width: 50%;
    height: 30%;

@media(max-width: 999px) {
   width: 80%;
   height: 20%;
}
    
@media(max-width: 476px) {
       width: 80%;
       height: 20%;
 }
@media screen  and (max-width: 414px){
   width: 80%;
   height: 20%;
}
`
const H1 = styled.h1`
    font-size: 30px;
    color: orange;
    font-family: Inter, arial, sans-serif;
    padding-top: 10px;
`
const P = styled.h1`
    font-size: 18px;
    color: lightgrey;
    font-family: Inter, arial, sans-serif;
    padding-top: 10px;
`
const Button = styled.h1`
    font-size: 18px;
    color: black;
    background: orange;
    font-family: Inter, arial, sans-serif;
    width: 20%;
    height: 50px;
    display: flex;
    margin-top: 20px;
    border-radius: 7px;
    cursor: pointer;
    justify-content: center;
    align-items: center;


  @media(max-width: 999px) {
    width: 50%;
}
    
@media(max-width: 476px) {
      width: 50%;
 }
@media screen  and (max-width: 414px){
    width: 50%;
}
`