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
@media screen and (max-width: 450px) {
    margin: 32px 0px 20px 28px;
    font-size: 20px;
    line-height: 20px;
}
`

const Contain = styled.div`
margin: 0px 56px;
@media screen and (max-width: 450px) {
    margin: 0px 26px;
}
`
const WrapStyle = styled.div`
padding:0px;
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
@media screen and (max-width: 450px) {
    margin-right: 0px;
}
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
`

const Category = () => {
  return (
    <div className="container-fluid">
        <H1>SHOP BY CATEGORIES</H1>
        <Contain className="row gap-5">
            <div className="col-sm col-12">
                <div className="row gap-sm-0 gap-5 justify-content-between">
                    <WrapStyle className="col-sm-6 col-12 ">
                        <Img src={Men} />
                        <CategoryTag data="Men"   />
                    </WrapStyle>
                    <WrapStyle className="col-sm-5 col-12">
                    <Img src={Women} />
                    <CategoryTag data="Women"  />
                    </WrapStyle>
                </div>
                
            </div>
            <Colu className="col-12 col-sm gap-3 gap-sm-0">
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