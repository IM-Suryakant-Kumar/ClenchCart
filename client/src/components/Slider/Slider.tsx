import { Card, CardButton, CardDesc, CardImg, CardInfo, CardTitle, Container, LeftArrow, RightArrow, Wrapper } from "./slider.css"
import CarImg from "../../assets/car-img.jpg"
import { useState } from "react"

export const Slider = () => {
  const [slide, setSlide] = useState(0);

  const handleLeftSlide = () => {
    if (slide === 0) return setSlide(2);
    else setSlide(prevSlide => prevSlide - 1);
  }

  const handleRightSlide = () => {
    if (slide === 2) return setSlide(0);
    else setSlide(prevSlide => prevSlide + 1);
  }

  return (
    <Container>
      <Wrapper $slideidx={slide}>
        <Card>
          <CardImg src={CarImg} alt="super car" />
          <CardInfo>
            <CardTitle>Super Cars</CardTitle>
            <CardDesc>Starts from ₹ 300</CardDesc>
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
        </Card>
        <Card>
          <CardImg />
          <CardInfo>
            <CardTitle></CardTitle>
            <CardDesc></CardDesc>
            <CardButton>Shop Now</CardButton>
          </CardInfo>
        </Card>
      </Wrapper>
      <LeftArrow onClick={handleLeftSlide} />
      <RightArrow onClick={handleRightSlide} />
    </Container>
  )
}