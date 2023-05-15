import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
import styled from 'styled-components'
import ProductCard from "../Components/productCard"
import { Dot, FilterIcon } from "../svg"

const ContainWrap = styled.div`
  margin: 64px 56px 40px ;
`

const Title = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;

`

const CatDetails = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`
const CatName = styled.span`
  font-weight: 600;
  font-size: 23px;
  line-height: 32px;
  color: #2D2D2D;
`

const DotMargin = styled.span`
  margin: 0px 8px;

`

const Total = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #DB6B97;
`
const Filter = styled.span`
  margin-left: 10px;
  color: #DB6B97;
`

const ProductWrap = styled.div`
  display:flex;
  justify-content: space-between;
  margin:40px 0px;
`

const category: React.FC<PageProps> = () => {
  return (
      <>
        <Header/>
        <ContainWrap>
          <Title>
            <CatDetails>
              <CatName>WOMEN</CatName>
              <DotMargin><Dot/></DotMargin>
              <Total>345 Items</Total>
            </CatDetails>
            <div>
            <FilterIcon/><Filter className="body1Regular">Filters</Filter>
            </div>
          </Title>
          <ProductWrap>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </ProductWrap>
        
        <ProductWrap>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </ProductWrap>

        <ProductWrap>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </ProductWrap>
          <></>
        </ContainWrap>
        
        
        {/* <Header/> */}
      </>
  )
}

export default category

export const Head: HeadFC = () => <title>Category List Page</title>