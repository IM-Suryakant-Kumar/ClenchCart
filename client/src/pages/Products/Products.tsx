import { Container, Wrapper } from "./products.css"
import { FilterPanel, Products as ProductsComp } from "../../components"

export const Products = () => {

  return (
    <Container>
      <FilterPanel />
      <Wrapper><ProductsComp /></Wrapper>
    </Container>
  )
}