import React from 'react'
import styled from 'styled-components';
import Card from '../card';
import card1 from '../../assets/cardImage1.png';
import card2 from '../../assets/cardImage2.png';
import card3 from '../../assets/cardImage3.png';
import card4 from '../../assets/cardImage4.png';

const WrapperContain = styled.div`
padding:64px 56px;
@media screen and (max-width: 450px) {
    padding:25px 25px;
}
`
const Img = styled.img`
position: absolute;
    object-fit: fill;
    width:100%;
    height:100%;
`
const Section1 = styled.div`
position: relative;
height:80vh;
margin-right: 32px;
/* background-image: url(${card1});
background-repeat: no-repeat;
background-size: cover ; */
@media screen and (max-width: 450px) {
    margin-right: 0px;
}
`

const Section2 = styled.div`

`

const Sec21 = styled.div`

height:40vh;
//background-color: red;
/* background-image: url(${card2});
background-repeat: no-repeat;
background-size: cover ; */
filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2));
`

const Sec22 = styled.div`
padding-top: 32px;
height:40vh;
//background-color: yellow;
`
const SubSec2 = styled.div`
position: relative;
/* background-image: url(${card3});
background-repeat: no-repeat;
background-size: cover ; */
`
const SubSec22 = styled.div`
position: relative;
/* background-image: url(${card4});
background-repeat: no-repeat;
background-size: cover ; */
`

export const HeroSection = () => {
    return (

        <>
            <WrapperContain className="container-fluid">
                <div className="row gap-3 justify-content-center w-100 ">
                    <Section1 className="col-sm-4 col-12">
                        <Img src={card1}/>
                        <Card 
                            title="Brands Everyone’s Crushing on"
                            content="Explore All"
                            link="" />
                    </Section1>
                    <Section2 className="col-sm-7 col-12">
                        <Sec21 className="row">
                            <div className="col">
                            <Img src={card2}/>
                            <Card 
                                title="456 Items"
                                content="Footwear"
                                link="" />
                                 </div>
                        </Sec21>
                        <Sec22 className="row gap-3 ">
                            <SubSec2 className="col">
                            <Img src={card3}/>
                                <Card 
                                    title="680 Items"
                                    content="Sweaters" 
                                    link=""
                                />
                            
                            </SubSec2>
                            <SubSec22 className="col">
                            <Img src={card4}/>
                                <Card 
                                    title="341 Items"
                                    content="Demins" 
                                    link=""
                                />
                            </SubSec22>
                        </Sec22>
                    </Section2>
                </div>
            </WrapperContain>
        </>

    )
}