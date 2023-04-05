import React from 'react'
import styled from 'styled-components'
import { Van } from '../../svg'

const DelCharge = styled.div`
    padding: 16px 77px;
    gap: 32px;
    width: 528px;
    height: 72px;
    background: #F6F6F6;
    border-radius: 8px;
    display:flex;
    flex-direction:row;
`

const Coupon = styled.h1`
    margin: 40px 0px 16px;
    color: #000000;
`
const DelMess = styled.div`
margin-left:32px;
`

const CouponBox = styled.div`
    background: #F6F6F6;
    border: 1px solid #D2D2D2;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    padding:12px 16px;
`
const Apply = styled.button`
    border: none;
    background: transparent;
`
const PriceDetails = styled.h1`
margin: 40px 0px 32px;
`
const Charges = () => {
  return (
    <div>
        <DelCharge>
            <Van />
            <DelMess className="body1Regular">
                <span className="tertiary">Yay!   <span className="primary">No Delivery Charge</span>on this order.</span>
               
            </DelMess>
        </DelCharge>
        <Coupon className="bodySemi">Have a Coupon?</Coupon>
        <CouponBox>
            <span className="body2Regular">Enter Coupon Code</span>
            <Apply className="body2Semi">APPLY</Apply>
        </CouponBox>
        <PriceDetails className="bodySemi">PRICE DETAILS <span>(2 ITEMS)</span></PriceDetails>
    </div>
  )
}

export default Charges