import React , {useState} from 'react'
import styled from 'styled-components' 
import Itemimg from '../../assets/Item1.png';
import {HeartFill , HeartOutline, Star} from '../../svg'
import { Link } from "gatsby"
import AddBtn from '../addBtn';

const Item = styled.div`
width: 240px;
height: 360px;
position:relative;
`

const Img = styled.img`
width:100%;
object-fit: contain;
opacity: .7;
&:hover {
    opacity: 1;
}
`

const Heart = styled.button`
background: transparent;
position: absolute;
border:none;
bottom:15px;
right: 20px;
`

const StarBtn = styled.button`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width: 55px;
    height: 24px;
    /* padding:4px 8px; */
    background: #FFFFFF;
    border-radius: 4px;
    position:absolute;
    border: none;
    z-index:3;
    bottom: 15px;
    left: 20px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
`
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


const ProductItem = ({data}) => {
    const {id, attributes:{name, oldPrice, newPrice}}=data
    console.log('hiiiiiiiiii',name);
    const [heart , SetHeart] = useState(false);
    const toggle = () => {
        SetHeart(s => !s);
    }
  return (
    <>
    <Item >
       <Link to={`/product/${id}`}> 
        {/* <Link to={`/product?id:1`} state={id}> */}
        <Img src={Itemimg} alt="product item" />
        </Link>
            <StarBtn>
                <Star/> 4.9
            </StarBtn>
        <Heart onClick={toggle}>
            {heart ? <HeartFill/> : <HeartOutline/>}
        </Heart>
    </Item>
    
    <Brand>{name}</Brand>
        <Desc>Green High Neck Knit Sweater</Desc>
        <Price>{oldPrice}<NPrice>{newPrice}</NPrice></Price>
        <AddBtn />
    </>
  )
}

export default ProductItem