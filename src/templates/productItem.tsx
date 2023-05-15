import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
import styled from 'styled-components'
// import { useParams } from 'gatsby'
import { useProductsContext } from "../context/products_context"
import ProItem from "../Components/proItem"
import { useState } from "react"
import Button from "../Components/global/Button"
import AmountButtons from "../Components/amountButtons"



const ProductPage: React.FC<PageProps> = ({ pageContext }) => {
	console.log('pageContext', pageContext)
	const { attributes } = pageContext
	const link = "http://localhost:1337"
	const imgdata = 'attributes.image.data'
	console.log()
	console.log('attributes', attributes);
	console.log(attributes.arraycolor, "as")
	const [main, setMain] = useState(1);
	const [mainColor, setMainColor] = useState(attributes.arraycolor[0])
	const [amount, setAmount] = useState(1);
	const StockValue = attributes.stock
	console.log(attributes.arraycolor[0], "sdssd");
	console.log(attributes.stock, "stock")

	const increase = () => {
		setAmount((oldAmount)=>{
			let tempAmount = oldAmount + 1
			if(tempAmount > StockValue){
				tempAmount = StockValue
			}
			return tempAmount
		})
		
		// if (amount >= StockValue) {
		// 	setAmount(StockValue)
		// }
		// else setAmount((oldAmount) => oldAmount + 1
		// )
	}

	const decrease = () => {
		setAmount((oldAmount) => {
			let tempAmount = oldAmount - 1
			if (tempAmount < 1) {
				tempAmount = StockValue
			}
			return tempAmount
		})
	}
	return (
		<>
			<Header />
			<ContainWrap className="container">
				<Gallery>
					<></>
				</Gallery>
				<Content>
					<div className="d-flex flex-row">
						<div className='d-flex flex-column mx-4 px-4'>
							{
								attributes.image.data.map((item, index) => {
									return (
										<div className="m-1 p-1">
											<img
												src={`${link}${item.attributes.url}`}
												style={{ width: "128px", height: "64px", objectFit: "contain" }}
												alt={item.attributes.name}
												key={item.id}
												onClick={() => { setMain(item.id) }}
												id={item.id}
												className={`${item.attributes.url === attributes.image.data[main - 1].attributes.url ? 'active' : 'null'}`}
											/>
										</div>
									)
								})}
						</div>
						<div className="mx-4 px-4">
							<img image_id={main} src={`${link}${attributes.image.data[main - 1].attributes.url}`} style={{ width: "400px", height: "400px" }} alt={attributes.name} />
						</div>

						<div className="d-flex flex-column mx-5 px-5">
							<h1>{attributes.name}</h1>
							<p className="desc">{attributes.description}</p>
							<p className="info">
								<Span >Available: </Span>
								{attributes.stock > 0 ? 'In Stock' : 'Out of Stock'}
							</p>
							<p className="info">
								<Span>Brand: </Span>
								{attributes.brand}
							</p>

							<div className="d-flex">
								<Span>
									Colors:
								</Span>
								{attributes.arraycolor.map((item, index) => {
									return (
										<span>
											<ColorButton
												style={{ backgroundColor: `${item.color}` }}
												onClick={() => setMainColor(item.color)}
												className={`${mainColor === item.color ? 'Op' : 'null'}`}
											>
											</ColorButton>
										</span>
									)
								})}
							</div>
							<div className="btn-container">
								<AmountButtons
									amount={amount}
									increase={increase}
									decrease={decrease}
								/>
							</div>
							<div className="my-2">
								<Button type="button" className="" data="Add To Cart"></Button>
							</div>
						</div>
					</div>


				</Content>

			</ContainWrap>
			{pageContext.name}
		</>
	)
}

const Span = styled.span`
    font-weight: 800;
`

const ColorButton = styled.button`
    opacity: .5;
    border:none;
    width:1.5rem;
    height:1.5rem;
    border-radius: 50%;
    margin-left:2rem;
    &.Op{
        opacity: 1;
        border: 1px solid grey;
    }
`;
// const Button = styled.button`
//     border:none;
//     width:1.5rem;
//     height:1.5rem;
//     border-radius: 50%;
//     opacity: .5;
//     .high{
//         width:3rem;
//         opacity: 1;
//     }
// `

const ContainWrap = styled.div`
    margin: 64px 56px 40px ;
`
const Content = styled.div`
display:flex;
flex-direction: column;
.active{
    box-shadow: 0px 0px 0px 2px black
}
`
const Gallery = styled.div`

`
export default ProductPage

export const Head: HeadFC = () => <title>Product Page</title>