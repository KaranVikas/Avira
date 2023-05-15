import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
import styled from 'styled-components'
import Order from "../Components/order"
import Vertical from "../Components/vertical"
import Charges from "../Components/charges"


const ContainWrap = styled.div`
  margin: 40px 96px 48px;
  @media screen and (max-width: 450px) {
    margin: 40px 20px 48px;
}
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
            <Content className="row">
                <div className="col-12 col-md-5">
                  <Order/>
                </div>
                
                <div className="d-none d-md-block col-1 d-flex justify-content-center">
                  <Vertical/>
                
                </div>

                <div className="col-12 col-md-5">
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