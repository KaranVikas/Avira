import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from 'styled-components'
import Van from '../../src/assets/Van.png'
import Confirmed from '../../src/assets/Confirm.png'
import Header from "../Components/Header"
import { RightWhiteArrow } from "../svg"

const ContentWrap = styled.div`
    margin-top: 55px;
    display:flex;
    flex-direction: column;
    justify-content: center;
`

const ContainWrap = styled.div`
  margin: 64px 56px 40px ;
  display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

const Img1 = styled.img`
    width: 328px;
    height: 64px;
    margin-bottom: 32px;
`
const Img2 = styled.img`
    width: 377px;
    height: 156px;
    margin: 64px 0;
`

const H1 = styled.h1`
    margin-top: 16px;
`

const H2 = styled.h2`
    margin-top: 16px;
    margin-bottom: 48px;
`
const Button = styled.button`
    width: 391px;
    height: 48px;
    padding: 12px 97px;
    background: #2D2D2D;
    border-radius: 8px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
`
const ConfirmedPage: React.FC<PageProps> = () => {
  return (
    <>
        <Header/>      
        <ContainWrap>
       <Img1 src={Confirmed}/>
       <h1>THANK YOU FOR YOUR ORDER!</h1>
       <H1>Order Id: 56089</H1>
       <Img2 src={Van}/>
       <h2>Estimated Delivery </h2>
       <H2>Monday, 09th January, 2023</H2>

        <Button>Continue Shopping <RightWhiteArrow/></Button>
      </ContainWrap>

    </>
  )
}

export default ConfirmedPage

export const Head: HeadFC = () => <title>Confirmation Page</title>