import React from 'react'
import styled from 'styled-components';
import Card from '../card';
import card1 from '../../assets/cardImage1.png';
import card2 from '../../assets/cardImage2.png';
import card3 from '../../assets/cardImage3.png';
import card4 from '../../assets/cardImage4.png';
import { graphql, useStaticQuery } from 'gatsby';
import { log } from 'console';
// import {  graphql , useStaticQuery } from 'gatsby';

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
    const data = useStaticQuery(graphql`
    query {
      allStrapiAviraCollection {
        nodes {
          Description
          Title
        }
      }
    }
  `)
  console.log("data",data);
    const dataDesc0 = data.allStrapiAviraCollection.nodes[0].Description;
    const dataDesc1 = data.allStrapiAviraCollection.nodes[1].Description;
    const dataDesc2 = data.allStrapiAviraCollection.nodes[2].Description;
    const dataDesc3 = data.allStrapiAviraCollection.nodes[3].Description;

    console.log("dataDesc0", dataDesc0);
    console.log("dataDesc1", dataDesc1);
    console.log("dataDesc2", dataDesc2);
    console.log("dataDesc3", dataDesc3);
    
    const {dataTitle0} = data.allStrapiAviraCollection.nodes[0].Title;
    const dataTitle1 = data.allStrapiAviraCollection.nodes[1].Title;
    const dataTitle2 = data.allStrapiAviraCollection.nodes[2].Title;
    const dataTitle3 = data.allStrapiAviraCollection.nodes[3].Title;
    
    console.log("dataTitle", dataTitle0);
    console.log("dataTitle", dataTitle1);
    console.log("dataTitle", dataTitle2);
    console.log("dataTitle", dataTitle3);

    return (

        <>
            <WrapperContain className="container-fluid">
                <div className="row gap-3 justify-content-center w-100 ">
                    <Section1 className="col-sm-4 col-12">
                        <Img src={card1}/>
                        
                        <Card 
                            title= {` ${dataDesc0}`}
                            content= {`${dataTitle0}`}
                            link="" />
                        
                    </Section1>
                    <Section2 className="col-sm-7 col-12">
                        <Sec21 className="row">
                            <div className="col">
                            <Img src={card2}/>
                            <Card 
                                title= {` ${dataDesc1}`}
                                content= {`${dataTitle1}`}
                                link="" />
                                 </div>
                        </Sec21>
                        <Sec22 className="row gap-3 ">
                            <SubSec2 className="col">
                            <Img src={card3}/>
                                <Card 
                                   title= {` ${dataDesc2}`}
                                   content= {`${dataTitle2}`}
                                    link=""
                                />
                            
                            </SubSec2>
                            <SubSec22 className="col">
                            <Img src={card4}/>
                                <Card 
                                   title= {` ${dataDesc3}`}
                                   content= {`${dataTitle3}`}
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
