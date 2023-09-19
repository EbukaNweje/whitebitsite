import React, { useState } from 'react'
import {HeaderBody, HeaderLeft, HeaderRight, Logo, Nav, HeaderButton, HeaderMobileDiv } from "../Header/HeaderStyle"
import LogoImg  from  "../../assets/logo.svg"
// import {IoIosArrowDown} from "react-icons/io"
// import {BsFillCreditCardFill} from "react-icons/bs"
import {AiOutlineMenuFold, AiOutlineClose} from "react-icons/ai"
import "./HeaderCss.css"
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom'



const Header = () => {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate();

  const showDropDown = () =>{
      setToggle(!toggle)
  }

  return (
    <HeaderBody>
          <HeaderLeft>
              <Logo src={LogoImg} alt="Whitebit Logo" onClick={()=>{navigate("/"), setToggle(false)}}/>
              <Nav>
                  <div className='NavTextBody'><span onClick={()=>navigate("/login")}>Invest</span>
                  {/* <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/> */}
                  </div>
                  <div className='NavTextBody'><span onClick={()=>navigate("/about")}>About</span>
                  {/* <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/> */}
                  </div>
                  <div className='NavTextBody'><span onClick={()=>navigate("/login")}>Plan</span>
                  {/* <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/> */}
                  </div>
                  {/* <div className='NavTextBody'><span>WBT Boost</span>
                  <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/>
                  </div> */}
                  {/* <div className='NavTextBody'><span>More</span>
                  <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/>
                  </div> */}
                  <div className='NavTextBody'><span>Help</span>
                  {/* <IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/> */}
                  </div>
                  {/* <div className='NavTextBody'> <BsFillCreditCardFill className='Icon'/><span>Wb Card</span><IoIosArrowDown style={{marginLeft: "5px", color: "gray"}}/></div> */}
              </Nav>
          </HeaderLeft>

          <HeaderRight>
            <HeaderButton wd cl onClick={()=>navigate("/login")}>Login</HeaderButton>
            <HeaderButton onClick={()=>navigate("/Signup")}>Sign up</HeaderButton>

              {!toggle ? <AiOutlineMenuFold className='Menu' onClick={showDropDown}/>  : <AiOutlineClose className='Menu MenuClose' onClick={showDropDown}/>}
          </HeaderRight>

        {
          toggle ? <HeaderMobileDiv>
              <SideBar setToggle= {setToggle}/>
          </HeaderMobileDiv> : null
        }
    </HeaderBody>
  )
}

export default Header