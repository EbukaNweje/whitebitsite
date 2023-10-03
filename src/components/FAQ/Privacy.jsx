import React from 'react'
import styled from 'styled-components'
import Footer from "../Footer/FooterSection"
import LastFoter from '../Footer/LastFoter';

const Privacy = () => {
  return (
    <>
    <Main>
        <H1>Privacy policy</H1>
        <p style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%"}}>This document "Privacy Policy" governs the collection, processing, and use of personal data of the client.
        whitebitcrypfield.org is the only data controller in full compliance with this Privacy Policy, which defines the procedure for the collection, processing, and use of the client’s personal data by the company as a data controller</p>
        <p style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%"}}>whitebitcrypfield.org and it’s affiliates guarantee and undertake to make every possible effort to protect the client's confidentiality. 
            <br /> 
       whitebitcrypfield.org may use the information collected about the customer to fulfill its contractual obligations and optimize customer service. <br /><br />
       
        Before using the site, please carefully study this document in order to fully understand our position and policy regarding the personal data of clients and how we will use them. The client may provide us with information about himself by filling out the appropriate forms on the site or by providing such information by phone or e-mail, in the course of contacting Client Support or in any other way.
            {/* <br/> <br />
        Information we collect about clients */}
        </p>

        <H1>Each time the client visits our website and uses our services, we can collect the following data about the client (including automatically):</H1>
            <p style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%"}}>
            Technical information, for example, IP address used to connect the client's computer to the Internet: client login data, browser type and version, operating system, etc. Data about the client visit to the site: financial information, including data on transactions and the status of the account and the movement of funds, as well as information on the deposit and withdrawal of funds.
            </p>
{/* 
            <p style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%"}}>
            data about the Client visit to the site;
            </p>

            <p style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%"}}>
            financial information, including data on transactions and the status of the account and the movement of funds, as well as information on the deposit and withdrawal of funds.
            </p> */}

            <H1> Purpose of using the Client's personal data:</H1>

            <p  style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%", paddingBottom:"7%"}}>For the fulfillment of the obligations specified in the agreements concluded with the client, as well as for the purpose of providing the client with the requested information to ensure the legislation requirements to prevent the legalization of proceeds from crime (money laundering) and terrorism financing to manage the site and to conduct internal operations, including the elimination of errors and analysis of information, to optimize the site and to make sure that the site’s content is as convenient as possible for the client’s computer, to ensure the safe provision of our services, as well as the security of client accounts, to provide customers with support and to respond to client complaints and questions related to the use of our services and website features.
                We undertake to store the client’s personal data as long as it is necessary, taking into account the goals described in this Privacy Policy, and our legal and regulatory requirements. In order to comply with obligations to record information, we will retain all personal data of Customers for five years.</p>
            {/* <p  style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%"}}>to ensure the legislation requirements to prevent the legalization of proceeds from crime (money laundering) and terrorism financing;</p>
            <p  style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%"}}>to manage the site and to conduct internal operations, including the elimination of errors and analysis of information;</p>
            <p  style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%"}}>to optimize the site and to make sure that the site content is as convenient as possible for the client’s computer OS;</p>
            <p  style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%"}}>to ensure the safe provision of our services, as well as the security of client accounts;</p>
            <p  style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%"}}>to provide customers with support and to respond to client complaints and questions related to the use of our services and website features;</p>

                <br /> <br />
            <p  style={{color:'gray', fontFamily: "Inter, arial, sans-serif", paddingTop: "2%", paddingLeft: "5%", width:"90%", paddingBottom:"7%"}}> We undertake to store the client’s personal data as long as it is necessary, taking into account the goals described in this Privacy Policy, and our legal and regulatory requirements. In order to comply with obligations to record information, we will retain all personal data of Customers for five years.</p> */}
    </Main>
    <Footer/>
    <LastFoter/>
    </>
  )
}

export default Privacy
const Main = styled.div`
    width: 100%;
    height: max-content;    
`
const H1 = styled.h1`
    color: black;
    font-family: Inter, arial, sans-serif;
    font-size: 30px;
    padding-top: 7%;
    padding-left: 5%;
    
@media(max-width: 999px) {
    padding-top: 20%;
}
    
@media(max-width: 476px) {
        padding-top: 20%;
 }
@media screen  and (max-width: 414px){
    padding-top: 20%;
}
`

