import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  className ?: string;
  onClick ?: any;
}

const Btn = styled.button`
    width:100%;
    height: 40px;
    padding: 8px 80px;
    background: #2D2D2D;
    border-radius: 8px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
`

const AddBtn: React.FC<ButtonProps> = ({
  onClick,
  className
}: ButtonProps ) => {
  return (
    <>
      <Btn
        type="button"
        className={className}
        onClick={onClick}
      >
        Add to cart
      </Btn>
    </>
      
    
  )
}

export default AddBtn;