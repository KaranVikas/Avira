import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import './src/styles/global.css'
import  { ProductsProvider } from "./src/context/products_context"
import { FilterProvider } from "./src/context/filter_context"
import { GatsbyBrowser } from "gatsby";

export const wrapRootElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
      return (
        <ProductsProvider>
            <FilterProvider>
                {element}
            </FilterProvider>
        </ProductsProvider>
        )
  }