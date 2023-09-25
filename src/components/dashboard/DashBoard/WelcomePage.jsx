import React, { useState } from 'react'
import { ContainerBody, ContainerWelcome,Account,
    //  Welcome,
    AccountSummary,PaymentBox, PaymentBoxdiv, Div, TextDive, Span,ActivePlans,
    ActivePlansBigDiv, ActivePlansBtn, Title
} from './WelecomeStyle'
import { RiMoneyDollarBoxFill } from 'react-icons/ri'
import { FaCoins, FaGift, FaGifts } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsArrowUpSquareFill, BsFillArrowDownCircleFill } from 'react-icons/bs'
import { CopyToClipboard } from "react-copy-to-clipboard";
import TradeChat from '../../LandingPage/Trade/TradeChat'


const WelcomePage = () => {
    const [close, setClose] = useState(true)
    const [state, setState] = useState({
        value: "https://whitebit.org/ebukanweje",
        copied: false,
      });

  return (
    <ContainerBody>
            {/* <Welcome>Welcome Ebuka Nweje</Welcome> */}
            {close ? <ContainerWelcome>Welcome to WhiteBit Company <span onClick={()=>setClose(false)}>x</span></ContainerWelcome>: null}

            <Account>
                <AccountSummary>
                    <h1>Account Summary</h1>

                    <PaymentBoxdiv>
                        <PaymentBox>
                            <Div> <TextDive><Span>Account Balance</Span> <p>$0.00</p></TextDive> <RiMoneyDollarBoxFill  style={{marginRight: "20px", fontSize: "35px", color:"#2980B9"}}/></Div>
                        </PaymentBox>
                        <PaymentBox>
                        <Div> <TextDive><Span>Total Profit</Span> <p>$0.00</p></TextDive> <FaCoins  style={{marginRight: "20px", fontSize: "35px", color:"#2980B9"}}/></Div>
                        </PaymentBox>
                        <PaymentBox>
                            <Div> <TextDive><Span>Bonus</Span> <p>$0.00</p></TextDive> <FaGift  style={{marginRight: "20px", fontSize: "35px", color:"#2980B9"}}/></Div>
                        </PaymentBox>
                    </PaymentBoxdiv>

                    <PaymentBoxdiv>
                        <PaymentBox>
                        <Div> <TextDive><Span>Trading Accounts</Span> <p>$0.00</p></TextDive> <GiHamburgerMenu  style={{marginRight: "20px", fontSize: "35px", color:"#2980B9"}}/></Div>
                        </PaymentBox>
                        <PaymentBox>
                            <Div> <TextDive><Span>Referral Bonus</Span> <p>$0.00</p></TextDive> <FaGifts  style={{marginRight: "20px", fontSize: "35px", color:"#2980B9"}}/></Div>
                        </PaymentBox>
                        <PaymentBox>
                        <Div> <TextDive><Span>Total Deposit</Span> <p>$0.00</p></TextDive> <BsFillArrowDownCircleFill  style={{marginRight: "20px", fontSize: "35px", color:"#2980B9"}}/></Div>
                        </PaymentBox>
                    </PaymentBoxdiv>

                    <PaymentBoxdiv>
                        <PaymentBox>
                        <Div> <TextDive><Span>Total Withdrawal</Span> <p>$0.00</p></TextDive> <BsArrowUpSquareFill  style={{marginRight: "20px", fontSize: "35px", color:"#2980B9"}}/></Div>
                        </PaymentBox>
                    </PaymentBoxdiv>
                </AccountSummary>

                <ActivePlans>
                    <h1>Active Plan(s) (0)</h1>
                        <ActivePlansBigDiv>
                            <h1>You do not have an active investment plan at the moment.</h1>
                            <ActivePlansBtn>Buy Plan</ActivePlansBtn>
                        </ActivePlansBigDiv>
                 </ActivePlans>

                <ActivePlans>
                    <h1>Refer Us & Earn</h1>
                        <ActivePlansBigDiv>
                            <h1>Use the below link to invite your friends.</h1>
                            <Title>
                                 <input value={state.value} />
                                <CopyToClipboard
                                 text={state.value}
                                 onCopy={() => setState({ copied: true })}
                                 >
                              <button>{state.copied ? "Copied" : "Copy text"}</button>
                            </CopyToClipboard>
                        </Title>
                        </ActivePlansBigDiv>
                 </ActivePlans>

                 <TradeChat/>
            </Account>
    </ContainerBody>
  )
}

export default WelcomePage