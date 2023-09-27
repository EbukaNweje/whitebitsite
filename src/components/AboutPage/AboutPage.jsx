import React from 'react';
import styled from 'styled-components';
import Container1 from './Component1/Component1'
import Container2 from './Component2/Component2'
import Component3 from './Component3/Component3';
import Footer from "../Footer/FooterSection"
import LastFoter from '../Footer/LastFoter';
// import Component4 from './Component4/Component4';
// import Footer from '../LandingPage/Footer/Footer';

const AboutPage = () => {
  return (
    <Container>
      <Container1/>
      <Container2/>
      <Component3/>
      {/* <Component4/> */}
      {/* <Footer/> */}
      <Footer/>
      <LastFoter/>
    </Container>
  )
};

export default AboutPage;

const Container = styled.div`
width: 100%;
height: auto;
/* background: linear-gradient(20deg,#e7b24d,#edcf97); */
/* background-color: red; */
`;