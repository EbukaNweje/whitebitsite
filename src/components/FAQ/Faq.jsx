import React, {useState} from 'react'
import { FAQBoxes, FAQPage, FAQPageHeader, RefImg, FAQSpan, FAQBoxesQue, FAQBoxesAns,
    FAQBoxesAns2, FAQBoxesAns3, FAQBoxesAns4, FAQBoxesAns5 } from './FAQStyle'
import Footer from "../Footer/FooterSection"
import LastFoter from '../Footer/LastFoter';
const FAQ = () => {
    const [ref, setRef] = useState(false)
    const [ref2, setRef2] = useState(false)
    const [ref3, setRef3] = useState(false)
    const [ref4, setRef4] = useState(false)
    const [ref5, setRef5] = useState(false)
  return (
    <div style={{paddingTop:"2px"}}>
         <FAQPage>
        <FAQPageHeader>FAQ</FAQPageHeader>
        {/* <FAQBoxes>
           <FAQBoxesQue>
                <FAQSpan>How to Buy Cryptocurrency on the WhiteBIT?</FAQSpan>
                <RefImg className={ref?'rot':null} onClick={()=>setRef(!ref)} src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' />
           </FAQBoxesQue>
           {
            ref?<FAQBoxesAns>The first step is to sign up through our website or mobile app. Once you've done that, verifying your identity through the KYC process is essential. It sounds like a hassle, but it's critical for your security and the security of other users on the platform. Plus, once verified, you'll have access to all the outstanding opportunities WhiteBIT offers! Once you're all set up, the next step is to deposit some national currency into your account using one of the many payment systems available on the platform. You can even use your Web3 wallet if that's more your style! After you deposit, you're ready to buy some cryptocurrency. You can place an order or use WhiteBIT's currency exchange to make your purchase. Overall, the process is pretty straightforward, and WhiteBIT offers many options to make it as easy and convenient as possible. So if you want to get into cryptocurrency, why not try WhiteBIT?</FAQBoxesAns>:null
           }

            {

            }
        </FAQBoxes> */}
        {/* <FAQBoxes>
            <FAQBoxesQue>
                <FAQSpan>Can I Buy Cryptocurrency with a Credit Card?</FAQSpan>
                <RefImg className={ref2?'rot':null} onClick={()=>setRef2(!ref2)} src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' />
            </FAQBoxesQue>
            {
                ref2?<FAQBoxesAns2>Yes! When you sign up for WhiteBIT, you'll receive a multicurrency wallet that you can easily top up using your credit card or other available payment options. It makes it easy to start buying and trading crypto on the platform. So, why wait? Take the opportunity to buy crypto and explore the exciting possibilities.</FAQBoxesAns2>:null
            }
            {

            }
        </FAQBoxes> */}
        <FAQBoxes>
            <FAQBoxesQue>
                <FAQSpan>What Types of Cryptocurrencies Are Available to Purchase on the WhiteBIT Crypto Exchange?</FAQSpan>
                <RefImg className={ref3?'rot':null} onClick={()=>setRef3(!ref3)} src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' />
            </FAQBoxesQue>
            {
                ref3?<FAQBoxesAns3>Suppose you want to diversify your crypto portfolio or explore new investment opportunities. In that case, the exchange features various popular coins like Bitcoin, Ethereum and tokens, including the native WhiteBIT Coin (WBT). With over 350+ trading pairs to choose from, there's truly something for everyone on WhiteBIT.</FAQBoxesAns3>:null
            }
            {

            }
        </FAQBoxes>
        <FAQBoxes>
           <FAQBoxesQue>
                <FAQSpan>Why Is It Better to Trade Cryptocurrencies on WhiteBIT?</FAQSpan>
                <RefImg className={ref4?'rot':null} onClick={()=>setRef4(!ref4)} src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' />
           </FAQBoxesQue>
           {
            ref4?<FAQBoxesAns4>There are many reasons to choose WhiteBIT as your go-to platform for trading cryptocurrencies. At WhiteBIT, we take the security of our clients' funds and personal data very seriously. That's why we store 96% of digital assets on cold wallets and use a Web Application Firewall (WAF) to detect and block hacker attacks, ensuring that funds on WhiteBIT are always safe. To further ensure the security of our platform, we've undergone audits by leading cybersecurity service provider Hacken.io, which specializes in blockchain technologies. These audits and certifications from CER.live in 2022 confirm that WhiteBIT meets the highest security requirements and is one of the most reliable exchanges, with an AAA rating.</FAQBoxesAns4>:null
           }
            {

            }
        </FAQBoxes>
        <FAQBoxes>
            <FAQBoxesQue>
                <FAQSpan>What Products Does WhiteBIT Ecosystem Include?</FAQSpan>
                <RefImg className={ref5?'rot':null} onClick={()=>setRef5(!ref5)} src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' />
            </FAQBoxesQue>
            {
                ref5?<FAQBoxesAns5>We offer Spot trading, Margin trading, Futures trading*, WhiteBIT Coin, WhiteBIT Earn, and Crypto Borrow. The ecosystem of our products is constantly growing and expanding, so stay tuned. *to meet regulatory requirements, third-party partners eligible to conduct the appropriate activities provide the services related to regulated activities on our platform. Also, the usage of such products may be limited to specific countries and regions – please, review our User Agreement for details.</FAQBoxesAns5>:null
            }
            {

            }
        </FAQBoxes>
    </FAQPage>
    <Footer/>
    <LastFoter/>
    </div>
  )
}

export default FAQ