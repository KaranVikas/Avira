import React from 'react'
import styled from 'styled-components'
import Men from '../../assets/Men.png'
import Women from '../../assets/Women.png'
import Access from '../../assets/Access.png'
import Beauty from '../../assets/Beauty.png'
import Kids from '../../assets/Kids.png'
import Footwear from '../../assets/Footwear.png'
import CategoryTag from '../categoryTag'

const H1 = styled.h1`
margin: 64px 0px 40px 56px;
`

const Contain = styled.div`
margin: 0px 56px;
`
const WrapStyle = styled.div`
position:relative;
/* background-image: url(${Men}); */
/* height: ${({height})=>height??'500px'}; */
/* background-image: ${(props)=>`url(${props.imgU})`}; */
height: ${(props) => props.active ? "300px" : "640px"};
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

const Colu = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
`

const Category = () => {
  return (
    <div classname="container-fluid">
        <H1>SHOP BY CATEGORIES</H1>
        <Contain className="row gap-5">
            <div className="col">
                <div className="row gap-5 justify-content-between">
                    <WrapStyle className="col-6 ">
                        <Img src={Men} />
                        <CategoryTag data="Men"   />
                    </WrapStyle>
                    <WrapStyle className="col-5">
                    <Img src={Women} />
                    <CategoryTag data="Women"  />
                    </WrapStyle>
                </div>
                
            </div>
            <Colu className="col">
                <div className="row gap-3 d-flex justify-content-between align-content-between ">
                        <WrapStyle className="col" active>
                            <Img src={Access} />
                            <CategoryTag data="Accessories" />
                        </WrapStyle>
                        <WrapStyle className="col" active>
                            <Img src={Kids} />
                            <CategoryTag data="Kids"  />
                        </WrapStyle>
                </div>

                <div className="row gap-3 d-flex justify-content-between align-content-between ">
                        <WrapStyle className="col" active>
                            <Img src={Footwear} />
                            <CategoryTag data="Footwear" bottom/>
                        </WrapStyle>
                        <WrapStyle className="col" active>
                            <Img src={Beauty} />
                            <CategoryTag data="Beauty" bottom/>
                        </WrapStyle>
                </div>
                
            </Colu>

            
            

        </Contain>
       
    </div>
  )
}

export default Category