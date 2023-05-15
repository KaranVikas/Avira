import React from 'react'
import styled from 'styled-components'

interface PriceProps {
    data1 ?: string;
    data2 ?: string;
    className ?: string;
    
}
const Field1 = styled.span`

`

const Field2 = styled.span`
    
`
const MRP = styled.div`
    display:flex;
    justify-content:space-between;
    color:#737373;;
`
const Discount = styled.div`

`
const Coupon = styled.div`

`
const Delivery = styled.div`

`
const Total = styled.div`

`
const Bill = styled.div`
margin:24px 0px;
`
const PriceDetail: React.FC<PriceProps> = ({
    data1,
    data2,
    className,

}: PriceProps) => {
  return (
    <Bill className="body2Regular">
        <MRP>
            <Field1 > {data1}</Field1> 
            <Field2 className={className}> {data2}</Field2>
        </MRP>
        {/* <Discount></Discount>
        <Coupon></Coupon>
        <Delivery></Delivery>
        <Total></Total> */}
    </Bill>
  )
}

export default PriceDetail