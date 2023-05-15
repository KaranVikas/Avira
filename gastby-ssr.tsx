import  { ProductsProvider} from "./src/context/products_context"
import { GatsbySSR } from "gatsby"

export const wrapRootElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return <ProductsProvider>{element}</ProductsProvider>
}