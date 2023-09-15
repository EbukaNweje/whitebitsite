import styled from "styled-components";

export const SideBarBody = styled.div`
    width: 100%;
    height: 100%;
`
export const Nav = styled.div`
    height: max-content;
    padding: 5px;
`
export const ButtonDiv = styled.div`
    width: 100%;
    height: 20vh;
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HeaderButton = styled.div`
 width: 80%;
  height: 50px;
  background: red;
  cursor: pointer;
  margin: 0px 5px;
  border-radius: 5px;
  background-color: #eabe4d;
  color:  black;
  transition: all 360ms;
  border:  none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, arial, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;

  &:hover,
  &:focus{
    background: #e5ad1f;
    /* border: ${({cl})=> (cl ? "solid 1px rgba(255, 255, 255, 0.373);" : "none")} */
  }
`
// export const SideBarBody = styled.div`

// `