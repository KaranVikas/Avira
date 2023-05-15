import React from 'react'
import styled from 'styled-components'
import AddressDetails from '../addressCardDetails'
import { Delete, Edit } from '../../svg'

const Card = styled.div`
    width:100%;
    border: 1px solid  rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding:30px;
    margin: 40px 0px;
    display: flex;
    justify-content: space-between;
`

const Input = styled.input`
  background: #DB6B97;
  border-radius: 16px;
  background: #FFFFFF;
`
const Btn = styled.button`
  background: transparent;
  border:none;
`
const AddressCard = () => {
  return (
    <>
        <Card>
            <div className='col-9 d-flex'>
              <div className='col-1'>
                <div class="">
                  <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  
                </div>
              </div>
              
              <div className='col-11'>

                <AddressDetails
                  name="Salem Mirza"
                  line1="Kochi - Kanyakumari Hwy, Palayam"
                  line2="Thiruvananthapuram, Kerala"
                  pincode="695001"
                  mobile="0471 247 0240"
                  special="Home"
                />

              </div>
              

            </div>
            <div className='col-2 d-flex justify-content-between align-items-start'>
              <Btn><Edit/></Btn>
              <Btn><Delete/></Btn>
            </div>
                 
        </Card>
    </>
  )
}

export default AddressCard