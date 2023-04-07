import React from 'react';
import styled from 'styled-components';
import Pay1 from '../../assets/Payment1.png';
import Pay2 from '../../assets/Payment2.png';

interface PaymentProps {
    data ?: string;
   
    
}

const InputWrap = styled.div`
    padding: 16px;
    gap: 16px;

    /* width: 528px; */
    

    /* Neutrals/Rule */

    border: 1px solid #D2D2D2;
    border-radius: 8px;
    margin-bottom:24px;
`
const Card = styled.div`
    margin-bottom: 24px;
`
const Content = styled.div`

`
const Label = styled.div`
    margin-left:16px;
`

const Gap = styled.span`
    margin-left: 16px;
`

const Img = styled.img`
    width: 48px;
    height: 24px;
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


const PaymentCard:React.FC<PaymentProps> = ({
    data,
    className
}: PaymentProps) => {
  return (
    <>
    <InputWrap>
        
        <Content className="">
            <Card className=" d-flex justify-content-between">

                <div className="d-flex ">

                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <Label className="body2Regular form-check-label" for="flexRadioDefault1">
                    {data}
                    </Label>
                </div>

                <div>
                    <Img src={Pay1}></Img>
                    <Gap></Gap>
                    <Img src={Pay2}></Img>
                </div>
            </Card>

            <InputWrapper
                 type="text"
                 class="form-control"
                 placeholder="Card Number"
                 aria-label="Username"
                 aria-describedby="basic-addon1"
            />
            
            <InputWrapper
                 type="text"
                 class="form-control"
                 placeholder="Name on Card"
                 aria-label="Username"
                 aria-describedby="basic-addon1"
            />
            <div className="row justify-content-between">
                <div className="col-6">
                    <InputWrapper
                    type="text"
                    class="form-control"
                    placeholder="MM/YY"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                </div>
                <div className="col-5">
                    <InputWrapper
                    type="text"
                    class="form-control"
                    placeholder="CVV"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                </div>
            </div>



        </Content>
    </InputWrap>
    </>
  )
}

export default PaymentCard