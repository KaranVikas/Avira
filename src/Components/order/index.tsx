import React from 'react'
import { Dot } from '../../svg'
import styled from 'styled-components';
import OrderCard from '../orderCard';
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
        <Head>
              <h1 className="m-0">ORDER SUMMARY</h1>
              <DotMargin><Dot/></DotMargin>
              <Total className="body2Semi">345 Items</Total>
              
        </Head>
        <OrderCard/>
        <OrderCard/>

    </OrderContent>
  )
}

export default Order;