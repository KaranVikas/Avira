import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"


const ProductPage: React.FC<PageProps> = () => {
  return (
      <>
        <Header/>
        hii
      </>
  )
}

export default ProductPage

export const Head: HeadFC = () => <title>Product Page</title>