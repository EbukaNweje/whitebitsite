import React from 'react'
import {SideBarBody, Nav, ButtonDiv, HeaderButton} from "./SideBarStyle"
import "./HeaderCss.css"
import { useNavigate } from 'react-router-dom'


const SideBar = ({setToggle}) => {
  const navigate = useNavigate();
  console.log(setToggle)
  return (
    <SideBarBody>
              <Nav>
                  <div className='SideBarNavText'><span>Invest</span>
                  {/* <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/> */}
                  </div>
                  <div className='SideBarNavText'><span>Futures</span>
                  {/* <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/> */}
                  </div>
                  <div className='SideBarNavText'><span>Plan</span>
                  {/* <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/> */}
                  </div>
                  <div className='SideBarNavText'><span>WBT Boost</span>
                  {/* <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/> */}
                  </div>
                  <div className='SideBarNavText'><span>More</span>
                  {/* <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/> */}
                  </div>
                  <div className='SideBarNavText'><span>Help</span>
                  {/* <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/> */}
                  </div>
                  {/* <div className='NavTextBody'> <BsFillCreditCardFill className='Icon'/><span>Wb Card</span><IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/></div> */}
              </Nav>
                <ButtonDiv><HeaderButton onClick={()=>{navigate("/login"), setToggle(false)}} >Login</HeaderButton></ButtonDiv>
    </SideBarBody>
  )
}

export default SideBar