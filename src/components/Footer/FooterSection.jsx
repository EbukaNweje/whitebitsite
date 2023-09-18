import React from 'react'
import './FooterSection.css'
// import image

const FooterSection = () => {
    return (
        <>
            <section className='Footer-section'>
                <div className='Footer-section-top'>
                    <div className='top-wrap'>
                        <div>
                            <ul>
                                <h3>Trading</h3>
                                <li>Markets</li>
                                <li>Exchange</li>
                                <li>Spot</li>
                                <li>Margin</li>
                                <li>Futures</li>
                                <li>Competition</li>

                            </ul>
                        </div>
                        <div>
                        <ul>
                                <h3>Products and Services</h3>
                                <li>WhiteBIT Earn</li>
                                <li>WhiteBIT Coin</li>
                                <li>Download application</li>
                                <li>Apple iconAndroid icon</li>
                                <li>Referral program</li>
                                <li>Institutional Services</li>
                                <li>Market Making Program</li>
                                <li>AML</li>
                                <li>Token listing</li>
                                <li>WhiteSwap <span></span></li>
                                <li>Whitepay</li>
                                <li>Whitepay</li>
                                <li>WB Network</li>
                                <li>WB Network</li>
                                <li>WB codes</li>

                            </ul>
                        </div>

                        <div>
                        <ul>
                                <h3> Information</h3>
                                <li>About company</li>
                                <li>FAQ</li>
                                <li>Ask a question</li>
                                <li>Channel verification</li>
                                <li>Fees</li>
                                <li>System page</li>
                                <li>Bug Bounty</li>
                                <li>Corporate identity</li>
                                <li>Blog</li>
                                <li>Careers <span></span></li>

                            </ul>
                        </div>

                        <div>

                        <ul>
                                <h3>Documentation</h3>
                                <li>API</li>
                                <li>User agreement</li>
                                <li>AML policy</li>
                                <li>Channel verification</li>
                                <li>Privacy policy</li>
                                <li>New asset request <br />
                                    listing@whitebit.com</li>
                                <li>Support <br />
                                support@whitebit.com</li>
                                <li>Partnerships <br />
                                    partnerships@whitebit.com</li>
                                <li>Institutional <br />
                                institutional@whitebit.com</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='Footer-section-buttom'>
                    <div className='footer-wrap'>
                            {/* <div className='footer-icon-text-holder'>
                                <div className='footer-icon'><img src="../src/x.svg" alt="" /></div>
                                <h4>Twitter</h4>
                            </div>

                            <div className='footer-icon-text-holder'>
                                <div className='footer-icon'><img src="./src/telegram.svg" alt="" /></div>
                                <h4>Telegram</h4>
                            </div>

                            <div className='footer-icon-text-holder'>
                                <div className='footer-icon'><img src="./src/discord.svg" alt="" /></div>
                                <h4>Discord</h4>
                            </div>

                            <div className='footer-icon-text-holder'>
                                <div className='footer-icon'><img src="./src/medium.svg" alt="" /></div>
                                <h4>Medium</h4>
                            </div>

                            <div className='footer-icon-text-holder'>
                                <div className='footer-icon'><img src="./src/facebook.svg" alt="" /></div>
                                <h4>Facebook</h4>
                            </div>

                            <div className='footer-icon-text-holder'>
                                <div className='footer-icon'><img src="./src/linkedin.svg" alt="" /></div>
                                <h4>Linkedin</h4>
                            </div>

                            <div className='footer-icon-text-holder'>
                                <div className='footer-icon'><img src="./src/youtube.svg" alt="" /></div>
                                <h4>Youtube</h4>
                            </div>

                            <div className='footer-icon-text-holder'>
                                <div className='footer-icon'><img src="./src/instagram.svg" alt="" /></div>
                                <h4>Instagram</h4>
                            </div> */}

                    </div>
                </div>
                <div className='footer-line'>
                    <div className='footer-line-align'></div>
                </div>
                <div className='Footer-section-buttom-2'>
                    <div className='Footer-section-buttom-2-wrap'>
                        <div className='left-footer-text'>
                            <h5>© 2018 – 2023 WhiteBIT.org. All rights reserved</h5>
                        </div>
                        {/* <div className='right-footer-image'>
                            <span><img src="./src/unicert (1).svg" alt="" /></span>
                            <span><img src="./src/visa.svg" alt="" /></span>
                            <span><img src="./src/masterCard.svg" alt="" /></span>
                            <span><img src="./src/google.svg" alt="" /></span>
                        </div> */}
                    </div>
                </div>

            </section>
        </>
    )
}

export default FooterSection