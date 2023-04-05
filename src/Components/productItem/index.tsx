import React , {useState} from 'react'
import styled from 'styled-components' 
import Itemimg from '../../assets/Item1.png';
import {HeartFill , HeartOutline, Star} from '../../svg'

const Item = styled.div`
width: 240px;
height: 360px;
position:relative;
`

const Img = styled.img`
width:100%;
object-fit: contain;

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

const ProductItem = () => {
    const [heart , SetHeart] = useState(false);

    const toggle = () => {
        SetHeart(s => !s);
    }
  return (
    <Item >

        <Img src={Itemimg} alt="product item" />
            <StarBtn>
                <Star/> 4.9
            </StarBtn>
        <Heart onClick={toggle}>
            {heart ? <HeartFill/> : <HeartOutline/>}
        </Heart>
    </Item>
  )
}

export default ProductItem