import React from 'react'
import styled from 'styled-components'
import { Van } from '../../svg'
import OrderBtn from '../orderBtn'
import PriceDetail from '../priceDetail'

const DelCharge = styled.div`
    padding: 16px 77px;
    gap: 32px;
    width: 100%;
    height: 72px;
    background: #F6F6F6;
    border-radius: 8px;
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
`

const Coupon = styled.h1`
    margin: 40px 0px 16px;
    color: #000000;
`
const DelMess = styled.div`
margin-left:32px;
`

const Span = styled.span`
font-weight:600;
`
const CouponBox = styled.div`
    background: #F6F6F6;
    border: 1px solid #D2D2D2;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    padding:12px 16px;
`
const GroupInput = styled.div`
    position:relative;
`
const CouponInput = styled.input`

background: #F6F6F6;
width:100%;
outline:none;
  border: 1px solid #D2D2D2;
  border-radius: 8px;
  padding: 12px 16px;
  outline: none;
  ::placeholder {
    color: #737373;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

`

const Apply = styled.button`
    position:absolute;
    border: none;
    background: transparent;
    right: 2%;
    top: 25%;
`
const Details = styled.h1`
margin: 40px 0px 32px;
`

const PDetail = styled.div`

`

const HR = styled.hr`
    margin-bottom:24px;
`

const TotalAmount = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:32px;
`

const Total = styled.span`
    
`
const Amount = styled.span`

`
const Charges = () => {
  return (
      <div>
        <DelCharge>
            <Van />
            <DelMess className="body1Regular">
                <span className="tertiary">Yay!   <Span className="primary">No Delivery Charge </Span>on this order.</span>
               
            </DelMess>
        </DelCharge>
        <Coupon className="bodySemi">Have a Coupon?</Coupon>
        
        <GroupInput>
            <CouponInput
                type="text"
                placeholder="Enter Coupon Code"
            >
                
                
            </CouponInput>
            <Apply className="body2Semi">APPLY</Apply> 
        </GroupInput>
        <Details className="bodySemi">PRICE DETAILS <span>2 ITEMS</span></Details>
        <PDetail>
            <PriceDetail data1="Total MRP" data2="RS. 5,598" className="primary" />
            <PriceDetail data1="Discount on MRP" data2="- RS. 809" className="green" />
            <PriceDetail data1="Coupon Discount" data2="RS. 0" className="primary" />
            <PriceDetail data1="Delivery Charge" data2="Free" className="green" />
            <HR/>
        </PDetail>
        <TotalAmount className="bodySemi">
            <Total className="tertiary">Total Amount</Total>
            <Amount className="accent">Rs. 4,789</Amount>
        </TotalAmount>
        <OrderBtn/>
        
    </div>
  )
}

export default Charges