import React from 'react'
import styled from 'styled-components'

const Tag = styled.div`

  
`

interface ButtonProps {
  data ?: string;
  className ?: string;
  onClick ?: any;
  bottom ?: boolean;
}

const ButtonTag = styled.button`
  margin: ${(props) => props.down ? "24px 16px" : "20px 24px"};
  position: absolute;
  ${(props) => props.bottom ? "top: 16px" : "bottom: 16px" }; 
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
  className,
  bottom
}: ButtonProps) => {
  return (
    <Tag>
        <ButtonTag
          type="button"
          className={className}
          onClick={onClick}
          bottom={bottom}    
        >
          {data}
        </ButtonTag>
    </Tag>
  )
}

export default CategoryTag;