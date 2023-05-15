import * as React from "react"
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
import styled from "styled-components";
import Backg from "../assets/LeftSection.png";
import Button from '../Components/global/Button';
import { BsEyeFill } from 'react-icons/bs';
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { navigate } from "gatsby"


const H1 = styled.h1`
margin-bottom: 4px;
`
const H3 = styled.h3`
margin-bottom: 32px;
`

const Login = styled.div`
width: 35%;
/* height:100%; */
margin: auto;
display:flex;
justify-content:center;
align-items: center;
`

const LoginContent = styled.div`
  /* display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center; */

`
const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`
const BackImg = styled.img`
  width:100%;
  height: 100%;

  /* height:100vh; */
  object-fit: fill;
`
const InputWrapper = styled.input`
  background: #F6F6F6;
  border: 1px solid #D2D2D2;
  border-radius: 8px;
  height: 48px;
  width: 360px;
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
const Forget = styled.div`
  width:100%;
  margin: 24px 0px;
`

const Hr = styled.hr`
  color:black;
  height:2px;
  width:100%;
  margin: 32px 0px;
`

const InputCheck = styled.input.attrs({ type: 'checkbox' })`
 
/* background-color: red;
border-color: red; */
:checked{
  background-color: #DB6B97;;
  border-color: #F6F6F6;}

`
const GroupBtn  = styled.div`
  position:relative;
`
const PasswordBtn = styled.button`
  position: absolute;
  right:0;
  top:10%;
`

const Section1 = styled.div`
  width:60%;
  height:100%;
`




const SignUpPage: React.FC<PageProps> = () => {
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e:any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential:any) => {
        console.log(userCredential);

        navigate('/')
        
      })
      .catch((error:any)=> {
        console.log(error);
      })
  };

  const [passwordShow , setPasswordShow] = useState(false);

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  } 

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }
  return (
    <>
      <Wrapper className="d-flex">
        <Section1 className="h-100 d-none d-md-block">
          
          <BackImg src={Backg} />
        </Section1>
        <Login className="h-100">
          <LoginContent className="">
            <H1>Create an Account</H1>
            <H3 className="body2Regular">Hello there, Let’s start your journey with us.</H3>
            <div class="input-group mb-3 d-flex justify-content-center">
              <InputWrapper
                type="text"
                class="form-control"
                placeholder="Email or phone number"
                value={email}
                onChange={(e:any) => setEmail(e.target.value)}
              />
              
            </div>
            <GroupBtn class="input-group mb-3 d-flex justify-content-center" >
            <InputWrapper
                type={passwordShow ? "text" : "password"}
                class="form-control"
                placeholder="Enter Password"
                onChange={(e:any) => setPassword(e.target.value)}

               
              />
              <PasswordBtn className="btn" onClick={togglePassword}>{passwordShow ? <i><BsEyeFill/></i> : <i><BsEyeFill/></i>}</PasswordBtn>
            </GroupBtn>
            
            <Forget className="d-flex justify-content-between align-items-center">
              <div className="form-check form-switch">
                <InputCheck
                  className="form-check-input accent"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label caption"
                  for="flexSwitchCheckDefault"
                >
                  I accept the <span className="accent">Terms of Service</span> and <span className="accent">Privacy Policy.</span>
                </label>
              </div>
             
            </Forget>

            {/* <Button>Sign in</Button> */}
            <Button
              data="Signup"
              className="bodySemi secondary"
              onClick={signUp}
            />

            <Hr />

            <div className="d-flex justify-content-center">
              <span className="caption" style={{ marginRight: "8px" }}>
              Already have an account?
              </span>
              <span className="captionSemi">Login now</span>
            </div>
          </LoginContent>
        </Login>
      </Wrapper>
    </>
  );
}

export default SignUpPage

export const Head: HeadFC = () => <title>signup</title>


