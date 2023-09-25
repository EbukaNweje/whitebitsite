import React from 'react'
import './Deposits.css'
import { useNavigate } from 'react-router-dom'

function Deposits() {
    const nav = useNavigate()
  return (
    <div className='Deposit_Container'>
        <section  className='Deposits_Wrapper'>
            <div className='Deposit_Card'>
               <div className='Deposit_CardWrapper'>
                 <div className='Deposit_Amount'>
                    <div className='Amount_Top'>
                        <span className='Ammount_Label'>Enter Amount</span>
                        <input className='Amount_Input' type="number" placeholder='Enter Amount' />
                    </div>
                    <div className='Amount_Bot'>
                        <span className='Ammount_Label'>Choose Payment Method from the list below</span>
                        <div className='Choose_Div'>
                            <div className='Transfer_Bitcoin'>
                            <div className='Transfer_Div'>
                                <img src="https://app.kryptbased-assets.com/assets/images/gateway/62be9545c5c8e1656657221.png" alt="" /><span>Bitcoin</span>
                            </div>   
                                <input type="radio"/>
                            </div>
                            <div className='Transfer_Bitcoin'>
                                <div className='Transfer_Div'>
                                <img src="https://app.kryptbased-assets.com/assets/images/gateway/62be977e49fbc1656657790.png" alt="" /><span>Ethereum</span>
                                </div>
                                <input type="radio"/>
                            </div>
                            <div className='Transfer_Bitcoin'>
                                <div className='Transfer_Div'>
                                <img src="https://app.kryptbased-assets.com/assets/images/gateway/62be9a611d53b1656658529.png" alt="" /><span>Tether</span>
                                </div>
                                <input type="radio"/>
                            </div>
                            <div className='Transfer_Bitcoin'>
                                <div className='Transfer_Div'>
                                <img src="https://app.kryptbased-assets.com/assets/images/gateway/62be9a1a5f7421656658458.png" alt="" /><span>DOGECOIN</span>
                                </div>
                                <input type="radio"/>
                            </div>
                            <div className='Transfer_Bitcoin'>
                                <div className='Transfer_Div'>
                                <img src="https://app.kryptbased-assets.com/assets/images/gateway/62be995c370c81656658268.png" alt="" /><span>BNB</span>
                                </div>
                                <input type="radio"/>
                            </div>
                        </div>
                    </div>
                    <button className='Amount_Btn' onClick={()=>{
                        nav('/ConfirmDeposit')
                    }}>Proceed to payment</button>
                </div>
                <div className='Deposit_Total'>
                    <div className='Total_Card'>
                        <div className='Total_Top'>
                            <div className='Inner'>
                                <span>Total Deposit</span>
                                <h4>-</h4>
                            </div>
                            <div className='Inner'>
                                <h4>$0.00</h4>
                                <span>Amount</span>
                            </div>

                        </div>
                        <div className='Total_Bot'>
                            <span>View deposit history</span>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </section>
        {/* <div className='Amount_Confrimation'>
            <div className='Amount_ConfrimationCard'>

            </div>
        </div> */}
    </div>
  )
}

export default Deposits