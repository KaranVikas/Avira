import React from 'react'
import styled from 'styled-components'

interface TagProps {
    data ?: string;
    className ?: string;
    onClick ?: any;
    size ?:boolean;
}

const ButtonTag = styled.button`
    background: #F6F6F6;
    border-radius: 4px;
    padding: 4px 8px;
    color: #2D2D2D;
    border:none;
    margin-right:24px;
`

const ItemTag: React.FC<TagProps> = ({
    data,
    onClick,
    className,
    size
}: TagProps ) => {
  return (
    <>
            <ButtonTag
                type="button"
                className={className}
                onClick={onClick}
                size={size}
                >{data}
            </ButtonTag>
    </>
  )
}

export default ItemTag;