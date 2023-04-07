import React from 'react'
import styled from 'styled-components'
import OrderCard1 from '../../assets/OrderCard1.png'
import { Close, GreenTick } from '../../svg'
import ItemTag from '../itemTag'

const Card = styled.div`
    width:100%;
    border: 1px solid  rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding:30px;
    margin: 40px 0px;

`
const Img = styled.img`
    margin-right:48px;
    width: 112px;
    height: 170px;
`
const ProdDetails = styled.div`
    margin-right: 40px;
`

const ItemName = styled.h1`
    margin-bottom:0px;
`

const Desc = styled.h1`
    margin-top:0px;
    margin: 4px 0px 16px;
`

const TagGroup = styled.div`
    margin-bottom:20px;
`
const Price = styled.div`
    margin-top: 16px;
    display:flex;
    align-items:center;
`
const Old = styled.span`
    text-decoration:line-through;
`
const New = styled.span`

`

const Delivery = styled.span`
    margin-left:10px;
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
                <ItemName className="bodySemi">ZARA</ItemName>
                <Desc className="body2Regular">Blue mini dress</Desc>
                <TagGroup>
                    <ItemTag className="bodySemi" data="Size: S"></ItemTag>
                    <ItemTag className="bodySemi" data="Qty: 1"></ItemTag>
                </TagGroup>
                <div className="bodySemi">
                    <Old className="">
                        Rs. 3299
                    </Old>
                    <New className="accent ms-2">
                        Rs. 2999
                    </New>
                    
                </div>
                <Price className="caption"><GreenTick/>
                    <Delivery className="tertiary">Delivery by </Delivery>
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