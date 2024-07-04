import { Container } from "./home.css"
import { Slider, Products } from "../../components"

export const Home = () => {
  return (
    <Container>
      <Slider />
      <Products />
      {/* <Footer /> */}
    </Container>
  )
}