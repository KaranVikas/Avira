import * as React from "react"
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
import styled from "styled-components";
import Backg from "../assets/LeftSection.png";
import Button from '../Components/global/Button';
import { BsEyeFill } from 'react-icons/bs';
import { signInWithGoogle } from '../Firebase/firebase';
import { auth } from '../Firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { navigate } from "gatsby";
import axios from 'axios'



const H1 = styled.h1`
margin-bottom: 32px;
`

const Login = styled.div`
width: 40%;
/* height:100%; */
margin: auto;
display:flex;
justify-content:center;
align-items: center;
@media screen and (max-width:450px){
  width:100%;
}
`

const LoginContent = styled.div`
/* background-color: bisque; */
  /* display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center; */

`
const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 450px){
    /* margin:20px 20px; */
  }
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
  border-radius: 8px;
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
  @media(max-width: 320px){
   max-width: 280px;
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
  display: flex;
  justify-content: center;
  
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




const LoginPage: React.FC<PageProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow , setPasswordShow] = useState(false);

  const login = () => {
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentail:any) => {
        console.log(userCredentail);

   
        navigate('/')
      })
      .catch((error:any) => {
        console.log(error);
      });
  };

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  }

  axios.get('http://localhost:1337/api/avira-collections')
    .then((response)=>{
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  // }
  return (
    <>
      <Wrapper className="d-flex">
        <Section1 className="h-100 d-none d-md-block">
          <BackImg src={Backg} />
        </Section1>
        <Login className="h-100">
          <LoginContent className="">
            <H1>Nice to see you again!</H1>
            <div class="mb-3 d-flex justify-content-center">
              <InputWrapper
                type="text"
                placeholder="Email or phone number"
                onChange={(e:any) => setEmail(e.target.value)}
              />
              
            </div>
            <GroupBtn class="mb-3 position-relative" >
            <InputWrapper
                type={passwordShow ? "text" : "password"}
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
                  Remember me
                </label>
              </div>
              <div className="caption">
                <a>Forgot Password?</a>
              </div>
            </Forget>

            {/* <Button>Sign in</Button> */}
            <Button
            type="button"
              data="Sign in"
              className="bodySemi secondary"
              onClick={login}
            />

            <Hr />

            <div className="d-flex justify-content-center">
              <span className="caption" style={{ marginRight: "8px" }}>
                Don't have an account
              </span>
              <span className="captionSemi">Get started</span>
            </div>
          </LoginContent>
        </Login>
      </Wrapper>
    </>
  );
}

export default LoginPage

// export const Head: HeadFC = () => <title>Login Page</title>


