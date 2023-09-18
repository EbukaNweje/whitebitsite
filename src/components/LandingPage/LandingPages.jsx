import React from 'react'
import styled from 'styled-components'
import HeroSection from "./HeroSection/HeroSection"
import Carousel from "./Carousels/Carousel"
import TradeChat from './Trade/TradeChat'
import MyHeroPage from "./Hero2/Hero"
import Authtomated from './Land6/Authtomated'
import HowToStart from "./HowToStart/HowToStart"
import Question from "./Faq/Question"

const LandingPages = () => {
  return (
    <LandingPagesBody>
        <HeroSection/>
        <Carousel/>
        <TradeChat/>
        <MyHeroPage/>
        <Authtomated/>
        <HowToStart/>
        {/* <Question/> */}
    </LandingPagesBody>
  )
}

export default LandingPages

const LandingPagesBody = styled.div`
  width: 100%;
  height: max-content;
  padding-top: 4%;
`