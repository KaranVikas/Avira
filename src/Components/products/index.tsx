import React from 'react'
import styled from 'styled-components'
import ProductCard from '../productCard'

const ContainWrap = styled.div`
  margin: 80px 56px 72px;
`

const H1 = styled.h1`
  margin-bottom: 40px;
`

const ProductWrap = styled.div`
  display:flex;
  justify-content: space-between;
`
const Products = () => {
  return (
    <ContainWrap>
        <H1>PRODUCTS AT SLASHED PRICES</H1>
        <ProductWrap>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </ProductWrap>
    </ContainWrap>
  )
}

export default Products