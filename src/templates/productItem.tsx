import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
import styled from 'styled-components'
// import { useParams } from 'gatsby'
import { useProductsContext } from "../context/products_context"
import ProItem from "../Components/proItem"

const ContainWrap = styled.div`
    margin: 64px 56px 40px ;
`
const Content = styled.div`
display:flex;
flex-direction: column;
`
const Gallery = styled.div`

`

const ProductPage: React.FC<PageProps> = ({pageContext}) => {
console.log('pageContext',pageContext)
    const {attributes} = pageContext
    const link = "http://localhost:1337"

 console.log('attributes', attributes);
 console.log('attributes', attributes.image.data[0].attributes.url);
 console.log("link",link+attributes.image.data[0].attributes.url)
 
//    const [main, setMain] = useState(images[0])
    
  return (
      <>
        <Header/>
        <ContainWrap>
            <Gallery>
                <></>
            </Gallery>
            <Content>
                <div className="d-flex flex-row">

                    <div className="d-flex flex-column">
                        <img src={`${link}${attributes.image.data[0].attributes.url}`} style={{width:"120px", height:"120px"}} alt= {attributes.name}/>
                        <img src={`${link}${attributes.image.data[1].attributes.url}`} style={{width:"120px", height:"120px"}} alt= {attributes.name}/>
                        <img src={`${link}${attributes.image.data[2].attributes.url}`} style={{width:"120px", height:"120px"}} alt= {attributes.name}/>
                        <img src={`${link}${attributes.image.data[3].attributes.url}`} style={{width:"120px", height:"120px"}} alt= {attributes.name}/>
                    </div>
                    <img src={`${link}${attributes.image.data[0].attributes.url}`} style={{width:"400px", height:"400px"}} alt= {attributes.name}/>

                </div>
                <div className="d-flex flex-column">
                    <h2>{attributes.name}</h2>
                    <p className="desc">{attributes.description}</p>
                    <p className="info">
                        <span>Available: </span>
                        {attributes.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </p>
                    <p className="info">
                        <span>Brand: </span>
                        {attributes.brand}
                    </p>
                </div>
                
                
            </Content>
            
        </ContainWrap>
        {pageContext.name}
      </>
  )
}

export default ProductPage

export const Head: HeadFC = () => <title>Product Page</title>