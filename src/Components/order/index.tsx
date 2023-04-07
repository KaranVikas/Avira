import React from 'react'
import { Dot } from '../../svg'
import styled from 'styled-components';
import OrderCard from '../orderCard';
import CheckHead from '../checkHead';
import AddressCard from '../addressCard';
import PaymentOption from '../paymentOption';
import PaymentCard from '../paymentCard';
import PaymentLogo from '../PaymentLogo';
// import CatDetails from '../../pages/category'

const OrderContent = styled.div`

`

const Head = styled.div`
display:flex;
align-items: center;
`

const Total = styled.div`

`

const DotMargin = styled.span`
margin: 0px 16px;
`


const Order = () => {
  return (
    <OrderContent>
        {/* <Head>
              <h1 className="m-0">ORDER SUMMARY</h1>
              <DotMargin><Dot/></DotMargin>
              <Total className="body2Semi">345 Items</Total>
        </Head> */}
        
         {/* <OrderCard/>
        <OrderCard/> */}

        {/* Component 2 */}

        {/* <CheckHead data="SELECT DELIVERY ADDRESS" btnData="ADD NEW ADDRESS" />

        <AddressCard/> 
        <AddressCard/> 
        <AddressCard/> 
           */}

        <PaymentOption data="Cash On Delivery" className="d-flex" />
        <PaymentOption data="PhonePay/Google Pay/ BHIM UPI" className="d-flex" />
        <PaymentOption data="Net Banking" className="d-flex"/>

        <PaymentCard data="Credit/Debit Card" className="d-flex"/>
        
        <PaymentLogo/>

    </OrderContent>
  )
}

export default Order;