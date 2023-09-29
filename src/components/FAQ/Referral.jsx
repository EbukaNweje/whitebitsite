import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Footer from "../Footer/FooterSection"
import LastFoter from '../Footer/LastFoter';

const Referral = () => {
const nav = useNavigate()
  return (
    <>
    <Main>
        <BigImg src="https://cdn.whitebit.com/static/img/referral/introImgNew.png" alt="Referral"/>
        <H1>Referral program</H1>
        <P>Get up to 50% of every trading fee paid by the users who sign up via your referral link</P>

        <button style={{width: "15%", margin: "2%"}} onClick={()=>nav("/login")}>Get referral link</button>
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
// const H1 = styled.h1`
//     font-size: 30px;
//     color: orange;
//     font-family: Inter, arial, sans-serif;
//     padding-top: 10px;
// `