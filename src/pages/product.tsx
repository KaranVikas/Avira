import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
// import { useParams } from 'gatsby'
import { useProductsContext } from "../context/products_context"

const ProductPage: React.FC<PageProps> = (location) => {
 

  return (
      <>
        <Header/>
        hii
      </>
  )
}

export default ProductPage

export const Head: HeadFC = () => <title>Product Page</title>