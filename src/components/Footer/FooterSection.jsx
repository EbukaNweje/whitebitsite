import React from 'react'
import './FooterSection.css'
import { Link } from 'react-router-dom'

// import image

const FooterSection = () => {
// const navigate = useNavigate();
    return (
        <>
            <section className='Footer-section'>
                <div className='Footer-section-top'>
                    <div className='top-wrap'>
                        {/* <div>
                            <ul>
                                <h3>Trading</h3>
                                <li>Markets</li>
                                <li>Exchange</li>
                                <li>Spot</li>
                                <li>Margin</li>
                                <li>Futures</li>
                                <li>Competition</li>

                            </ul>
                        </div> */}
                        <div style={{margin: "10px 0px"}}>
                        <ul>
                                <h3>Products and Services</h3>
                                {/* <li>WhiteBIT Earn</li>
                                <li>WhiteBIT Coin</li>
                                <li>Download application</li>
                                <li>Apple iconAndroid icon</li> */}
                                <Link to="/referral" style={{color:"#B5B5B7"}}>
                                <li>Referral program</li>
                                </Link>
                                {/* <li>Institutional Services</li>
                                <li>Market Making Program</li>
                                <li>AML</li>
                                <li>Token listing</li>
                                <li>WhiteSwap <span></span></li>
                                <li>Whitepay</li>
                                <li>Whitepay</li>
                                <li>WB Network</li>
                                <li>WB Network</li>
                                <li>WB codes</li> */}

                            </ul>
                        </div>

                        <div style={{margin: "10px 0px"}}>
                        <ul>
                                <h3> Information</h3>

                                <Link to="/about" style={{color:"#B5B5B7"}}>
                                    <li>About company</li>
                                </Link>
                                <Link to="/faq" style={{color:"#B5B5B7"}}>
                                    <li>FAQ</li>
                                </Link>

                                <Link to="/sendrequest" style={{color:"#B5B5B7"}}>
                                <li>Ask a question</li>
                                </Link>

                            </ul>
                        </div>

                        <div style={{margin: "10px 0px"}}>

                        <ul>
                                <h3>Documentation</h3>
                                    <Link to="/privacy" style={{color:"#B5B5B7"}}>
                                    <li>Privacy policy</li>
                                    </Link>
                                <li>support@whitebitcrypfield.org</li>
                                <li>partnerships@whitebitcrypfield.org</li>
                            </ul>
                        </div>
                    </div>
                </div>
              
                {/* <div className='footer-line'>
                    <div className='footer-line-align'></div>
                </div> */}
            </section>
        </>
    )
}

export default FooterSection