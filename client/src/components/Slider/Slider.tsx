import { Card, CardButton, CardDesc, CardImg, CardInfo, CardTitle, Container } from "./slider.css"
import CarImg from "../../assets/car-img.jpg"

export const Slider = () => {
  return (
    <Container>
      <Card>
        <CardImg src={CarImg} alt="super car" />
        <CardInfo>
          <CardTitle>SuperCars</CardTitle>
          <CardDesc>Starts from 300</CardDesc>
          <CardButton>Shop Now</CardButton>
        </CardInfo>
      </Card>
      {/* <Card>
        <CardImg />
        <CardInfo>
          <CardTitle></CardTitle>
          <CardDesc></CardDesc>
          <CardButton>Shop Now</CardButton>
        </CardInfo>
      </Card>
      <Card>
        <CardImg />
        <CardInfo>
          <CardTitle></CardTitle>
          <CardDesc></CardDesc>
          <CardButton>Shop Now</CardButton>
        </CardInfo>
      </Card> */}
    </Container>
  )
}