import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Components/Header"
import About from "../Components/about"


const AboutPage: React.FC<PageProps> = () => {
  return (
      <>
        <Header/>
        <About/>
        
      </>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Page</title>