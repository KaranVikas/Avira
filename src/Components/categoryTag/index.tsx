import React from 'react'
import styled from 'styled-components'

const Tag = styled.div`
    margin:24px 16px;
`

interface ButtonProps {
  data ?: string;
  className ?: string;
  onClick ?: any;
}

const ButtonTag = styled.button`
    width: 160px;
    height: 56px;
    background: #FFFFFF;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border:none;
`
const CategoryTag: React.FC<ButtonProps> = ({
  data,
  onClick,
  className
}: ButtonProps) => {
  return (
    <Tag>
        <ButtonTag
          type="button"
          className={className}
          onClick={onClick}    
        >
          {data}
        </ButtonTag>
    </Tag>
  )
}

export default CategoryTag;