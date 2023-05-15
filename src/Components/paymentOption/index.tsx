import React from 'react'
import styled from 'styled-components'

interface PaymentProps {
    data ?: string;
    className ?: string
    
}

const InputWrap = styled.div`
    padding: 16px;
    gap: 16px;

    /* width: 528px; */
    height: 56px;

    /* Neutrals/Rule */

    border: 1px solid #D2D2D2;
    border-radius: 8px;
    margin-bottom:24px;
`

const Content = styled.div`

`
const Label = styled.div`
margin-left:16px;

`



const PaymentOption: React.FC<PaymentProps> = (
    {
        data, 
        className
    }: PaymentProps) => {
  return (
    <>
    <InputWrap>
        
        <Content className={className}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <Label className="body2Regular form-check-label" for="flexRadioDefault1">
                {data}
                </Label>
        </Content>
    </InputWrap>
    </>
  )
}

export default PaymentOption