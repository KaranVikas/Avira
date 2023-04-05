import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
import About from "../Components/about"
import Category from "../Components/categories"


const ShopPage: React.FC<PageProps> = () => {
  return (
      <>
        <Header/>
        <Category/>
        
      </>
  )
}

export default ShopPage

export const Head: HeadFC = () => <title>About Page</title>