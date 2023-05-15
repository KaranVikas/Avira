

import * as React from "react"
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import Header from "../Components/Header"
import { LocationIcon, PhoneIcon, MessageIcon, ClockIcon, Shopping } from "../svg"
import IconGrp from '../../src/assets/IconGroup.png'
import { GatsbyImage } from "gatsby-plugin-image"

const ContainWrap = styled.div`
  margin-top: 100px;
  margin-bottom:150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width:450px ){
    margin: 25px;
    flex-direction: column    
  }
`
const ContactForm = styled.div`
  margin-left:128px;
  @media screen and (max-width:450px){
    margin-bottom: 20px;
    margin-left:0px
  }
`

const H3 = styled.h3`
  margin-bottom: 40px;
  @media screen and (max-width:450px ){
    margin-bottom: 20px;
  }
`
const InputWrapper = styled.input`
  margin-bottom: 16px;
  background: #F6F6F6;
  border: 1px solid #D2D2D2;
  border-radius: 8px;
  height: 48px;
  width: 100%;
  padding: 12px 10px;
  outline: none;
  ::placeholder {
    color: #737373;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`


const TextArea = styled.textarea`
  margin-bottom:32px;
  background: #F6F6F6;
  border: 1px solid #D2D2D2;
  border-radius: 8px;
  /* height: 48px; */
  width: 100%;
  padding: 12px 10px;
  outline: none;
  ::placeholder {
    color: #737373;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  @media screen and (max-width: 450px) {
    margin-bottom:20px;
  }
`
const InputField = styled.div`
`

const Location = styled.div`
  padding:86px 68px;
  background: #DB6B97;
  @media screen and (max-width:450px) {
  padding: 43px 34px;
  }
`

const P = styled.p`
  margin-left: 28px;
  color: #FFFFFF;
`

const IconWrap = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media screen and (max-width:450px) {
    margin-bottom: 20px;
  }
`

const Image = styled.img`
  width: 168px;
  height: 24px;
`

const Button = styled.button`
  width: 100%;
  height: 48px;
  padding: 12px 97px;
  background: #2D2D2D;
  border-radius: 8px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`

const Bag = styled.div`
  position: absolute;
  bottom:0;
  right:0;
`
const Dummy: React.FC<PageProps> = () => {
    // const  {allStrapiProduct} = useStaticQuery(graphql`
    // query MyQuery {
    //     allStrapiProduct {
    //       nodes {
    //         image {
    //           localFile {
    //             childrenImageSharp {
    //               gatsbyImageData
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)
    // console.log("*",allStrapiProduct.nodes)
    return (
      <></>
        // allStrapiProduct.nodes.map(item=>{
        //     if(item.image)

            
        //         return(
                
        //             <GatsbyImage image={item.image[0].localFile.childrenImageSharp[0].gatsbyImageData} alt='Hi'/>
        //         )
           
            
        // })
    )
}

export default Dummy

export const Head: HeadFC = () => <title>Confirmation Page</title>