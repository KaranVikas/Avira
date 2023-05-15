import React from "react";
import styled from "styled-components";

interface ButtonProps {
    data?: string;
    className?: string;
    onClick?: any;
}

const ButtonWrapper = styled.button`
    height: 48px;
    width: 360px;
    border-radius: 8px;
    background: #2D2D2D;
    border-radius: 8px;
    padding: 9px 129px;
    color:#ffffff;
`

const Button: React.FC<ButtonProps> = ({
   data,
   onClick,
   className 
}: ButtonProps ) => {
    return(
        <>
            <ButtonWrapper
                type="button"
                className={className}
                onClick={onClick}
            >
                {data}
            </ButtonWrapper>
        </>
    )
} 

export default Button;