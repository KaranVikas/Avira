import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import styled from 'styled-components';

interface AmountButtonProps{
	increase: () => void;
	decrease: () => void;
	amount: number;
}
const AmountButtons = ({increase,decrease,amount}:AmountButtonProps) => {
	return (
		<ContentWrapper>
			<Button
				type="button"
				className=""
				onClick={decrease}
			>
				<FaMinus />
			</Button>
			<h2 className='amount'>{amount}</h2>
			<Button
				type="button"
				className=""
				onClick={increase}
				>
					<FaPlus />
			</Button>
		</ContentWrapper>
	)
}
const ContentWrapper = styled.div`
    display:flex;
		width:150px;
		h2{
			margin-bottom:0;
		}
`

const Button = styled.button`
    background: transparent;
			border: none;
			cursor: pointer;
			justify-content: center;
			align-items: center;
`

export default AmountButtons