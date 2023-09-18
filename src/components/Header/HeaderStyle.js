import styled  from "styled-components";

export const HeaderBody = styled.div`
    width: 100%;
    height: 10vh;
    background: #08080C;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 10000;

    @media(max-width: 414px) {
      height: 7vh;
  }
  
  
  @media(max-width: 999px) {
      height: 12vh;
  }

`
export const HeaderLeft = styled.div`
  width: 60%;
  height: 100%;
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
    width: 15%;
    height: 100%;
    margin-left: 5%;
    margin-right: 10px;

    @media(max-width: 414px) {
      width: 50%;
    }

    @media(max-width: 999px) {
      width: 50%;
  }
`

export const Nav = styled.div`
    width: 88%;
    height: 70%;
    /* background: green; */
    display: flex;
    align-items: center;

    @media(max-width: 414px) {
      display: none
    }

    @media(max-width: 999px) {
      display: none;
  }
`

// export const NavTextBody = styled.div`
//     width: max-content;
//     height: 100%;
//     /* background: #000; */
//     color: rgb(255, 255, 255);
//     display: flex; 
//     align-items: center;
//     font-family: Inter, arial, sans-serif;
//     font-size: 14px;
//     font-weight: 500;
//     line-height: 22px;
//     margin-left: 15px;
//     justify-content: center;
//     cursor: pointer;
    
//     :hover{
//         background-color: aliceblue;

//     }
//     svg:hover{
//         background-color: aliceblue;  
//     }

    
// `

export const HeaderRight = styled.div`
  width: 17%;
  height: 100%;
  /* background: blue;  */
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 414px) {
      width: 50%;
      justify-content: flex-end;
      margin-right: 5%;
    }

  @media screen and  (max-width: 688px) {
      width: 40%
    }
`

export const HeaderButton = styled.button`
  width: ${({ wd }) => (wd ? '30%' : '35%')};
  height: 35px;
  background: red;
  cursor: pointer;
  margin: 0px 5px;
  border-radius: 5px;
  background-color: ${({cl})=> (cl ? "black" : "#eabe4d")};
  color: ${({cl})=> (cl ? "white" : "black")};
  transition: all 360ms;
  border: ${({cl})=> (cl ? "solid 1px rgba(255, 255, 255, 0.575);" : "none")};
    
  &:hover,
  &:focus{
    background:  ${({cl})=> (cl ? "black" : "#e5ad1f")};
    border: ${({cl})=> (cl ? "solid 1px rgba(255, 255, 255, 0.373);" : "none")}
  }

  @media(max-width: 414px) {
        display: ${({cl})=> (cl ? "none" : "block")};
        width:40%;
    }

@media(max-width: 999px) {
  display: ${({cl})=> (cl ? "none" : "block")};
  width:40%;
 }
` 

export const HeaderMobileDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(16, 16, 16);
  position: fixed;
  top: 12%;
`

// export const HeaderBody = styled.div`

// `

