import React from 'react'
import styled from 'styled-components'
import { RightWhiteArrow } from '../../svg'


const Btn = styled.button`
    width:100%;
    padding: 12px 97px;
    background: #2D2D2D;
    border-radius: 8px;
    color: #FFFFFF;

`

const OrderBtn = () => {
  return (
    <Btn>Place Order <RightWhiteArrow/></Btn>
  )
}

export default OrderBtn