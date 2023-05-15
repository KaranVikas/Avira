import React from 'react'
import styled from 'styled-components'

interface Headerprops{
    data : string;
    btndata ?: String;
    noBtn ?: boolean;
}
const Heading = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:450px){
        flex-direction: column;
        
    }
`

const Button = styled.button`
    padding: 12px 24px;
    gap: 8px;
    height: 48px;
    border: 1px solid #DB6B97;
    color: #DB6B97;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
`

const CheckHead: React.FC<Headerprops> = ({
    data,
    noBtn,
    btndata
}: Headerprops) => {
  return (
    <Heading>
        <h1>{data}</h1>
        {noBtn ? null :<Button>{btndata}</Button> }
    </Heading>
  )
}

export default CheckHead