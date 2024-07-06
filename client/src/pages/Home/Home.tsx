import { Container, Heading } from "./home.css"
import { Slider, Products } from "../../components"

export const Home = () => {
  return (
    <Container>
      <Slider />
      <Heading>New Launches</Heading>
      <Products />
    </Container>
  )
}