import React, { useState } from 'react'
import {MainContainer, DashBoardBody,DashBoardBodyContainer,DashBoardBodyContainerLeft,
    DashBoardBodyContainerRight,ContainerLeftLogo,ContainerLeftProfile,ContainerLeftUserName,
    ContainerLeftStatus, ContainerLeftBalances,ContainerLeftMenuNav,ContainerLeftMenuNavCard,
    ContainerLeftMenuNavCardBox, ContainerLeftContact, ContainerLeftButtons, ContainerRightHeader,
    ContainerRightSmallHeader,ContainerRightSmaillProfile, ContainerRightMainBodyChange,Logout,
    MobileSpan, DiskTopMenu, MobileNavMenu, ContainerLeftMenuNavMobile,ContainerLeftMenuNavCardmobile,
    ContainerLeftMenuNavCardBoxMobile, CloseSpanButton,Starting

} from "./DashBoardStyle"
import logo from "../../../assets/Icon.jpeg"
import Withdrawal from './Withdrawal/Withdrawal'
import {BiSolidUserCircle} from "react-icons/bi"
import {GrMoney} from "react-icons/gr"
import {AiOutlineMenu} from "react-icons/ai"
import {FaDownload, FaMoneyCheckAlt, FaHome, FaHandshake} from "react-icons/fa"
import {FaCircleUser, FaShareFromSquare} from "react-icons/fa6"
import {BiSolidUpArrowCircle} from "react-icons/bi"
import {RiHandCoinFill} from "react-icons/ri"
import WelcomePage from './WelcomePage'
// import DepositsPage from "./Deposits/Deposits"

import Deposits from './Deposits/Deposits'
import Plans from "./Plans"

const DashBoard = () => {
    const [menuclose, setMenuClose] = useState(true)
    const [Mobilemenuclose, setMobileMenuClose] = useState(false)
    const [withdrawal, setWithdrawal] = useState(false)
    const [deposit, setDeposit] = useState(false)
    const [home, setHome] = useState(true)
    const [plan, setPlan] = useState(false)
    const [active, swtActive] = useState("rgb(1, 52, 84)")

  return (
    <MainContainer>
        <DashBoardBody/>

        <DashBoardBodyContainer>

        {menuclose?
           <DashBoardBodyContainerLeft>
           <ContainerLeftLogo src={logo} alt='Logo'/>
           <ContainerLeftProfile>
               <BiSolidUserCircle style={{color: "white", fontSize: "120px", marginTop: "10%", cursor: "pointer"}}/>
               <ContainerLeftUserName>Ebuka Nweje</ContainerLeftUserName>
               <ContainerLeftStatus>Online</ContainerLeftStatus>
               <ContainerLeftBalances><GrMoney/> $100.00</ContainerLeftBalances>
           </ContainerLeftProfile>

           <ContainerLeftMenuNav>
               <ContainerLeftMenuNavCard>
                   <ContainerLeftMenuNavCardBox style={{background: `${home ? active : ""}`}}
                      onClick={()=>{
                        setDeposit(false)
                        setWithdrawal(false)
                        setHome(true)
                       }}
                   ><FaHome style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Home</span></ContainerLeftMenuNavCardBox>
                   <ContainerLeftMenuNavCardBox style={{background: `${deposit ? active : ""}`}}
                    onClick={()=>{
                        setDeposit(true)
                        setWithdrawal(false)
                        setHome(false)
                       }}
                   ><FaDownload style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Deposit</span></ContainerLeftMenuNavCardBox>
               </ContainerLeftMenuNavCard>
               <ContainerLeftMenuNavCard>
                   <ContainerLeftMenuNavCardBox style={{background: `${withdrawal ? active : ""}`}}
                   onClick={()=>{
                    setDeposit(false)
                    setWithdrawal(true)
                    setHome(false)
                   }}
                   ><BiSolidUpArrowCircle style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Withdraw</span></ContainerLeftMenuNavCardBox>
                   <ContainerLeftMenuNavCardBox><FaMoneyCheckAlt style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Transactions</span></ContainerLeftMenuNavCardBox>
               </ContainerLeftMenuNavCard>
               <ContainerLeftMenuNavCard>
                   <ContainerLeftMenuNavCardBox><FaCircleUser style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Profile</span></ContainerLeftMenuNavCardBox>
                   <ContainerLeftMenuNavCardBox><RiHandCoinFill style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Trading Plans</span></ContainerLeftMenuNavCardBox>
               </ContainerLeftMenuNavCard>
               <ContainerLeftMenuNavCard>
                   <ContainerLeftMenuNavCardBox style={{background: `${plan ? active : ""}`}}
                     onClick={()=>{
                        setDeposit(false)
                        setWithdrawal(false)
                        setHome(false)
                        setPlan(true)
                       }}
                   ><FaHandshake style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>My Plans</span></ContainerLeftMenuNavCardBox>
                   <ContainerLeftMenuNavCardBox><FaShareFromSquare style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Referrals</span></ContainerLeftMenuNavCardBox>
               </ContainerLeftMenuNavCard>
           </ContainerLeftMenuNav>

           <ContainerLeftContact>
               <h1>Need Help!</h1>
               <span>Contact our 24/7 customer support center</span>
               <ContainerLeftButtons>Contact Us</ContainerLeftButtons>
           </ContainerLeftContact>

           <Logout>Log Out</Logout>
       </DashBoardBodyContainerLeft>: null
    }


            <DashBoardBodyContainerRight>
                <ContainerRightHeader>
                        <ContainerRightSmallHeader>
                                <DiskTopMenu>
                                <AiOutlineMenu style={{marginLeft: "5%", fontSize: "20px", color: "white", cursor: "pointer"}} onClick={()=> setMenuClose(!menuclose)}/>
                                </DiskTopMenu>
                                <MobileSpan>
                                <AiOutlineMenu style={{marginLeft: "5%", fontSize: "30px", color: "white", cursor: "pointer"}} onClick={()=> setMobileMenuClose(true)}/>
                                </MobileSpan>
                                <ContainerRightSmaillProfile><BiSolidUserCircle style={{color: "white", fontSize: "50px", cursor: "pointer",}}/>
                                    <span>Ebuka nweje</span>
                                </ContainerRightSmaillProfile>
                        </ContainerRightSmallHeader>
                </ContainerRightHeader>


                <ContainerRightMainBodyChange>
                        <Starting>{
                                home ? ("Welcome Ebuka Nweje"):
                                withdrawal?("Withdrawal Page"):
                                deposit?("Deposit Page"):
                                plan?("Your Plans"): null
                            }</Starting>
                        {
                            home?(<WelcomePage/>):
                            withdrawal?(<Withdrawal />):
                            deposit?(<Deposits />):
                            plan?(<Plans />):null
                        }
                        {/* <WelcomePage/> */}
                </ContainerRightMainBodyChange>

                    {
                        Mobilemenuclose ? <MobileNavMenu>
                           <CloseSpanButton onClick={()=> setMobileMenuClose(false)}>X</CloseSpanButton> <ContainerLeftLogo src={logo} alt='Logo'/>
                         <BiSolidUserCircle style={{color: "white", fontSize: "90px", marginTop: "5%", cursor: "pointer"}}/>
                <ContainerLeftMenuNavMobile>
               <ContainerLeftMenuNavCardmobile>            
                   <ContainerLeftMenuNavCardBoxMobile  style={{background: `${home ? active : ""}`}}
                       onClick={()=>{
                        setDeposit(false)
                        setWithdrawal(false)
                        setHome(true)
                        setMobileMenuClose(false)
                       }}
                   ><FaHome style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Home</span></ContainerLeftMenuNavCardBoxMobile>
                   <ContainerLeftMenuNavCardBoxMobile style={{background: `${deposit ? active : ""}`}}
                     onClick={()=>{
                        setDeposit(true)
                        setWithdrawal(false)
                        setHome(false)
                        setMobileMenuClose(false)
                       }}
                   ><FaDownload style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Deposit</span></ContainerLeftMenuNavCardBoxMobile>
               </ContainerLeftMenuNavCardmobile>
               <ContainerLeftMenuNavCardmobile>
                   <ContainerLeftMenuNavCardBoxMobile style={{background: `${withdrawal ? active : ""}`}}
                    onClick={()=>{
                        setDeposit(false)
                        setWithdrawal(true)
                        setHome(false)
                        setMobileMenuClose(false)
                       }}
                   ><BiSolidUpArrowCircle style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Withdraw</span></ContainerLeftMenuNavCardBoxMobile>
                   <ContainerLeftMenuNavCardBoxMobile><FaMoneyCheckAlt style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Transactions</span></ContainerLeftMenuNavCardBoxMobile>
               </ContainerLeftMenuNavCardmobile>
               <ContainerLeftMenuNavCardmobile>
                   <ContainerLeftMenuNavCardBoxMobile><FaCircleUser style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Profile</span></ContainerLeftMenuNavCardBoxMobile>
                   <ContainerLeftMenuNavCardBoxMobile><RiHandCoinFill style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Trading Plans</span></ContainerLeftMenuNavCardBoxMobile>
               </ContainerLeftMenuNavCardmobile>
               <ContainerLeftMenuNavCardmobile>
                   <ContainerLeftMenuNavCardBoxMobile><FaHandshake style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>My Plans</span></ContainerLeftMenuNavCardBoxMobile>
                   <ContainerLeftMenuNavCardBoxMobile><FaShareFromSquare style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Referrals</span></ContainerLeftMenuNavCardBoxMobile>
               </ContainerLeftMenuNavCardmobile>
           </ContainerLeftMenuNavMobile>
                        </MobileNavMenu> : null
                    }

            </DashBoardBodyContainerRight>
        </DashBoardBodyContainer>
    </MainContainer>
  )
}

export default DashBoard