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
        <FAQBoxes>
           <FAQBoxesQue>
                <FAQSpan>How to change the email address?</FAQSpan>
                <RefImg className={ref?'rot':null} onClick={()=>setRef(!ref)} src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' />
           </FAQBoxesQue>
           {
            ref?<FAQBoxesAns>
                For security reasons, it is forbidden to change the email address on our platform. If you have lost access to your Email - you can contact the support and after confirming that this is your request, we can change your email address manually.
            </FAQBoxesAns>:null
           }

            {

            }
        </FAQBoxes>
        <FAQBoxes>
            <FAQBoxesQue>
                <FAQSpan>How to change the current password</FAQSpan>
                <RefImg className={ref2?'rot':null} onClick={()=>setRef2(!ref2)} src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' />
            </FAQBoxesQue>
            {
                ref2?<FAQBoxesAns2>
                    1. Click on Login Page
                    2. Click on Forget Password then you put your email. 
                </FAQBoxesAns2>:null
            }
            {

            }
        </FAQBoxes>
        <FAQBoxes>
            <FAQBoxesQue>
                <FAQSpan>How to register an account?</FAQSpan>
                <RefImg className={ref3?'rot':null} onClick={()=>setRef3(!ref3)} src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' />
            </FAQBoxesQue>
            {
                ref3?<FAQBoxesAns3>
                    1. You are on the home page of swiftcryptrade.com. Click on the "Register" button at the top right of the page. <br/>
                    2. You are on the Registration page, you need to enter an email address and come up with a complex password. The password must include a combination of upper and lower case letters, numbers and special characters. <br/>

                </FAQBoxesAns3>:null
            }
            {

            }
        </FAQBoxes>
        <FAQBoxes>
           <FAQBoxesQue>
                <FAQSpan>How to withdraw funds</FAQSpan>
                <RefImg className={ref4?'rot':null} onClick={()=>setRef4(!ref4)} src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' />
           </FAQBoxesQue>
           {
            ref4?<FAQBoxesAns4>
                1. You are on the main page of your account. Click on the menu "Wallet" on the left, then select "Balance" in a submenu. <br />
                2. On the balance page, you will see all currently available currencies for working with our platform. There will be a red "Withdraw" button on the left of each currency. Click on it. <br />
                3. You will see a window for withdrawal. You will need to enter the desired amount and address to receive your chosen currency (coin or token). Fill in these fields and click on the "Withdraw" button. <br />
                4. If all the actions are successful, you will see the corresponding window with the transaction number (hash). You can check this hash in the network of your chosen currency.
            </FAQBoxesAns4>:null
           }
            {

            }
        </FAQBoxes>
        <FAQBoxes>
            <FAQBoxesQue>
                <FAQSpan>Registration failed</FAQSpan>
                <RefImg className={ref5?'rot':null} onClick={()=>setRef5(!ref5)} src='https://cdn.whitebit.com/static/img/ui-kit/24px/chevron.svg' />
            </FAQBoxesQue>
            {
                ref5?<FAQBoxesAns5>
                    1. One of the common problems lies in the incorrect entry of your email. Re-check your email.One of the common problems lies in the incorrect entry of your email. Double-check your email. <br />
                    2. A weak password is the most common reason. The password must contain upper and lower case letters, at least 1 number and 1 special character. The minimum password length is 8 characters. <br />
                    3. Another reason - you might forget to confirm the agreement. A small box to the left of the Create Account button. <br />
                    4. If the problem still persists and you cannot continue the registration, report a bug in support.
                </FAQBoxesAns5>:null
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