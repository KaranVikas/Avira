import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
import styled from 'styled-components'
import Order from "../Components/order"
import Vertical from "../Components/vertical"
import Charges from "../Components/charges"


const ContainWrap = styled.div`
  margin: 40px 96px 48px;
`

const Content = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`



const checkout: React.FC<PageProps> = () => {
  return (
      <>
        <Header/>
        <ContainWrap>
            <Content>
                <Order/>
                
                <div>
                  <Vertical/>
                  hi
                </div>
                <div>
                  <Charges/>
                </div>
            </Content>
        </ContainWrap>
        {/* <Header/> */}
      </>
  )
}

export default checkout;

export const Head: HeadFC = () => <title>Checkout Page</title>