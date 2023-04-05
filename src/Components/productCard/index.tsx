import React from 'react'
import styled from 'styled-components'
import ProductItem from '../productItem';
import AddBtn from '../addBtn';

const Brand = styled.h3`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #2D2D2D;
    margin:16px 0px 4px;
`

const Desc = styled.h4`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #737373;
`
const Price = styled.h5`
    margin: 16px 0px;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #737373;
    text-decoration: line-through;
`
const NPrice = styled.span`
    margin-left:8px;
    color: #DB6B97;
    text-decoration: none;
`



const ProductCard = () => {
  return (
    <div>
        <ProductItem/>
        <Brand>ZARA</Brand>
        <Desc>Green High Neck Knit Sweater</Desc>
        <Price>Rs. 2999<NPrice>Rs. 2999</NPrice></Price>
        <AddBtn />
    </div>
  )
}

export default ProductCard;