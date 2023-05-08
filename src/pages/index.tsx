import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Header from "../Components/Header"
import { HeroSection } from "../Components/HeroSection/index"
import { ProductsProvider } from "../context/products_context"




const IndexPage: React.FC<PageProps> = () => {
  
  return (
      <ProductsProvider>
        <Header/>
        <HeroSection/>
        {/* <Header/> */}
      </ProductsProvider>
  )
}

export default IndexPage


export const Head: HeadFC = () => <title>Home Page</title>
