import React, { useState } from 'react'
import './Confirmation.css'

function Confirmation() {
    // const [proof, setProof] = useState("")
    const [remove, setRemove] = useState(false)
    const [proofShown, setProofShown] = useState("")
    const [change, setChange] = useState(false)
    // setProofShown(URL.createObjectURL(proof))
  return (
    <div className='Confirmation_Page'>
        <div className='ConfirmationWrapper'>
            <div className='Header_Texts'>
                <span>You have requested <span style={{color:"green"}}>500 USD</span> , Please pay <span style={{color:"green"}}>500 USD</span> for successful payment</span>
                <h2>Please follow the instruction below</h2>
            </div>
            <div className='Header_Instr'>
                <span>Kindly Make Payment to the Wallet Address</span>
                <span>below</span>
                <h2>1CNTtXHS489PNWG7CaE6Zpvzuo31XQvi8q</h2>
                <span>Provide Us With A Proof Of Payment using the form below after payment.</span>
            </div>
            <div className='ProofDiv'>
                <span>Note: Kindly check or confirm that you are making payment to the correct wallet address listed.</span>
                <p>Your Proof Of Payment *</p>
                <div className='Proof_Img'>
                    <div className={proofShown && !remove ?"Payment_PreviewSelected":change?"Payment_PreviewSelected":'Payment_Preview'}>
                    <img src={remove && !proofShown?"":proofShown} alt="" />
                    </div>
                    <input onChange={(e)=>{
                        const File =(e.target.files[0])
                        setProofShown(URL.createObjectURL(File))
                        {File?setChange(true):null}
                        }} className='Payment_Input' type="file" id='Payment'/>
                   {
                    proofShown && change?
                     <div className='Preview_Btn'>
                        <label className='Change_Btn' htmlFor="Payment">Change</label>
                        <button onClick={()=>{
                            setRemove(true)
                            setProofShown(!proofShown)
                            setChange(false)
                            
                        }} className='Remove_Btn'>Remove</button>
                    </div>:
                    !proofShown && !change?
                    <label className='Payment' htmlFor="Payment">Select your proof of payment</label>:null
                   }
                </div>
                <button className='Paynow_Btn'>Pay now</button>
            </div>
        </div>
    </div>
  )
}

export default Confirmation