import React from 'react'
import styled from 'styled-components'
import OrderCard1 from '../../assets/OrderCard1.png'
import { Close, GreenTick } from '../../svg'

const Card = styled.div`
    width:100%;
    border: 2px solid  #737373;
    border-radius: 8px;
    padding:30px;
    margin: 40px 0px;

`
const Img = styled.img`
    margin-right:48px;
    width: 112px;
    height: 168px;
`
const ProdDetails = styled.div`
    margin-right: 40px;
`

const Desc = styled.h1`
    margin: 4px 0px 16px;
`

const Price = styled.div`
    margin: 16px 0px;
`

const Date = styled.span`
    margin-left:9px;
`
const CloseBtn = styled.button`
    background: transparent;
    border: none;

`
const OrderCard = () => {
  return (
    <>
    <Card>
        <div className="d-flex flex-row">
            <div className="col-11 d-flex flex-row">
                <Img src={OrderCard1} />
                <ProdDetails className="col-7">
                <h1 className="bodySemi">ZARA</h1>
                <Desc className="body2Regular">Blue mini dress</Desc>
                <div></div>
                <div className="bodySemi">
                    <span className="">
                    Rs. 3299
                        <span className="accent ms-2">Rs. 2999</span>
                    </span>
                </div>
                <Price className="caption"><GreenTick/>
                    <span className="tertiary">Delivery by </span>
                    <Date className=""> 9th Jan, 2023</Date>    
                </Price>
            </ProdDetails>

            </div>
           <div className="col-1">
                <CloseBtn><Close/></CloseBtn>
           </div>

        </div>
    </Card>
    </>
  )
}

export default OrderCard