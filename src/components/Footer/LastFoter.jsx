import React from 'react'
import styled from 'styled-components'

const LastFoter = () => {
  return (
    <Footersectionbuttom2>
    <Footersectionbuttom2wrap>
        <Leftfootertext>
            <h5>© 2018 – 2023 whitebitcrypfield.org. All rights reserved</h5>
        </Leftfootertext>
        <ImagePart>
            <IconImag src='https://cdn.whitebit.com/static/img/footer/unicert.svg' alt='unicert'/>
            <IconImag src='https://cdn.whitebit.com/static/img/footer/visa.svg' alt='visa'/>
            <IconImag src='https://cdn.whitebit.com/static/img/footer/masterCard.svg' alt='masterCard'/>
            <IconImag src='https://cdn.whitebit.com/static/img/footer/google.svg' alt='google'/>
        </ImagePart>

    </Footersectionbuttom2wrap>
</Footersectionbuttom2>
  )
}

export default LastFoter

const Footersectionbuttom2 = styled.div`
    width: 100%;
    height: 10vh;
    height: max-content;
    padding: 5% 0px;
    display: flex;
    justify-content: center;
    background: #000;
`
const Footersectionbuttom2wrap = styled.div`
    width: 90%;
    height: 3vh;
    /* border-top: 1px solid lightgray; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
`
const Leftfootertext = styled.div`
    h5 {
    color: #ffffffb4;
    font-family: Inter, arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    }
`
const ImagePart = styled.div`
   width: 20%;
   display: flex;
   height: max-content;
   /* background: red; */
   justify-content: space-between;
`
const IconImag = styled.img`
   width: 40px;
   height: 35px;
   /* background: blue; */
`