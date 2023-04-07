import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from 'styled-components'
import Header from "../Components/Header"
import { LocationIcon, PhoneIcon, MessageIcon, ClockIcon, Shopping } from "../svg"
import IconGrp from '../../src/assets/IconGroup.png'

const ContainWrap = styled.div`
  margin-top: 100px;
  margin-bottom:150px;
  display: flex;
  justify-content: space-between;
`
const ContactForm = styled.div`
  margin-left:128px;
`

const H3 = styled.h3`
  margin-bottom: 40px;
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
`
const InputField = styled.div`
`

const Location = styled.div`
  padding:86px 68px;
  background: #DB6B97;
`

const P = styled.p`
  margin-left: 28px;
  color: #FFFFFF;
`

const IconWrap = styled.div`
  display: flex;
  margin-bottom: 40px;
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
const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
        <Header/>
        <ContainWrap>
          <ContactForm className="col-3">
              <h1>CONTACT US</h1>
              <H3 className="body2Regular">Feel free to contact us any time. We will get back to you as soon as we can.</H3>
              <InputField>
                  <InputWrapper
                    type="text"
                    placeholder="Name"
                  />
                  <InputWrapper
                    type="text"
                    placeholder="Email"
                  />
                  <TextArea 
                  cols={4}
                  rows={5}
                    type="text"
                    placeholder="Messge"
                  />
              </InputField>
              <Button>Send</Button>
          </ContactForm>

          <Location className="col-6">
            <IconWrap className='body1Regular'>
              <LocationIcon/>
                <P>
                  14 GreenRoad St.
                </P>
            </IconWrap>
            <IconWrap className='body1Regular'>
              <PhoneIcon/>
                <P>
                  14 GreenRoad St.
                </P>
            </IconWrap>
            <IconWrap className='body1Regular'>
              <MessageIcon/>
                <P>
                  avira@getinfo.com
                </P>
            </IconWrap>
            <IconWrap className='body1Regular'>
              <ClockIcon/>
                <div>
                  <P>
                    Mon-Fri: 9:00 AM - 8:00 PM
                  </P>
                  <P>
                    Sat: 9:30 AM - 6:30 PM
                  </P>
                </div>
            </IconWrap>

            <Bag>
              <Image src={IconGrp}></Image>
            </Bag>

          </Location>
          
          <Bag><Shopping/></Bag>
        </ContainWrap>     
        

    </>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Confirmation Page</title>