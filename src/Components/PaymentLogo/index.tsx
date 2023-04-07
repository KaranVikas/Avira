import React from 'react'
import styled from 'styled-components'
import Pay1 from '../../assets/Payment1.png';
import Pay2 from '../../assets/Payment2.png';
import Pay3 from '../../assets/Payment3.png';
import Pay4 from '../../assets/Payment4.png';
import Pay5 from '../../assets/Payment5.png';


const Center = styled.div`
    display:flex;
    justify-content:center;
    margin-top: 32px;
`
const ContentWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    width:80%;
`
const Img = styled.img`
    width: 64px;
    height: 32px;
    background: #FBFAF8;
    border-radius: 2px;
`


const PaymentLogo = () => {
  return (
    <Center>
    <ContentWrap>
        <Img src={Pay1}></Img>
        
        <Img src={Pay2}></Img>

        <Img src={Pay3}></Img>

        <Img src={Pay4}></Img>

        <Img src={Pay5}></Img>

    </ContentWrap>
    </Center>
  )
}

export default PaymentLogo