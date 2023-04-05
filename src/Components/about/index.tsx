import React from 'react'
import styled from 'styled-components'
import aboutImg from  '../../assets/AboutImage.png'
import {data, data2 } from './data'

const WrapperContainer = styled.div`

`
const Contain = styled.div`
    width:80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Title = styled.div`
     font-weight: 700;
    font-size: 44px;
    line-height: 64px;
    color: #2D2D2D;
    margin-top: 88px;
    margin-bottom: 40px;
    /* @media screen and (min-width: 2000px) {
        font-size: 54px;
    } */
`

const Content = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(115, 115, 115, 1);

`

const Content2 = styled.div`
    margin-top: 40px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(115, 115, 115, 1);
    margin-bottom: 96px;

`
const Img = styled.img`
    object-fit: fill;
    width:100%;
`

const H2 = styled.h2`
    color: #DB6B97;
`


const About = () => {
  return (
    <WrapperContainer className="container-fluid">
        <div className="row">

        <div className="col-8">

        <Contain className="container">    
            <Title>ABOUT US.</Title>
            <Content >{data.dataitem1}</Content>
            <Content2>{data.dataitem2}</Content2>
        <div className="body1Regular ">

        </div>
        <div className="row">
            {
                data2.map((item) => {
                    return(

                            <div className="col" key={item.id}>
                                <div className="desktopDisplay">
                                    {item.title}
                                </div>
                                <H2>{item.content}</H2>
                            </div>

                        
                    )
                })
            }
        </div>   
        </Contain>
        </div>

        <div className="col-4 p-0">
            <Img src={aboutImg} alt="about image"/>
        </div>    
            
        </div>
        
    </WrapperContainer>
  )
}  

export default About   