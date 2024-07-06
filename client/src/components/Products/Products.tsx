import { Bold, CButton, Card, Container, CStar, Image, InfoCont, Price, Rating, SubTitle, Title, Wrapper, RemoveFromWishlist, AddToWishlist } from "./products.css"


export const Products = () => {
  const isInFavorite = false;

  return (
    <Container>
      <Wrapper>
        <Card>
          <Image img="https://m.media-amazon.com/images/I/617T6-w8HXL._SL1010_.jpg" />
          <InfoCont>
            <Title>Royal Hub Sensor Remote Control Sports Car</Title>
            <SubTitle>
              <Price>₹<Bold>720</Bold></Price>
              <Rating><CStar />4.0</Rating>
            </SubTitle>
            <CButton>Add To Cart</CButton>
          </InfoCont>
          {isInFavorite ? <RemoveFromWishlist /> : <AddToWishlist />}
        </Card>
        <Card>
          <Image img="https://m.media-amazon.com/images/I/71l-Id5QlHL._SL1500_.jpg" />
          <InfoCont>
            <Title>Police Motorcycle Toy - Pull Back Motorcycle Toys</Title>
            <SubTitle>
              <Price>₹<Bold>521</Bold></Price>
              <Rating><CStar />4.2</Rating>
            </SubTitle>
            <CButton>Add To Cart</CButton>
          </InfoCont>
          {isInFavorite ? <RemoveFromWishlist /> : <AddToWishlist />}
        </Card>
        <Card>
          <Image img="https://m.media-amazon.com/images/I/51-of6HjvtL._AC_UL480_FMwebp_QL65_.jpg" />
          <InfoCont>
            <Title>SUPER TOY 2.4Ghz Remote Control Car Toy</Title>
            <SubTitle>
              <Price>₹<Bold>999</Bold></Price>
              <Rating><CStar />4.3</Rating>
            </SubTitle>
            <CButton>Add To Cart</CButton>
          </InfoCont>
          {isInFavorite ? <RemoveFromWishlist /> : <AddToWishlist />}
        </Card>
        <Card>
          <Image img="https://m.media-amazon.com/images/I/61fnO4+iI3L._SX522_.jpg" />
          <InfoCont>
            <Title>Rugged Bike | Looks Like The Real Bike with Pull Back Action</Title>
            <SubTitle>
              <Price>₹<Bold>355</Bold></Price>
              <Rating><CStar />4.1</Rating>
            </SubTitle>
            <CButton>Add To Cart</CButton>
          </InfoCont>
          {isInFavorite ? <RemoveFromWishlist /> : <AddToWishlist />}
        </Card>
        <Card>
          <Image img="https://m.media-amazon.com/images/I/81JSHyjmoCL._AC_UL480_FMwebp_QL65_.jpg" />
          <InfoCont>
            <Title>CLEVER TOTS Spider Super Hero Action Figure toy for kids</Title>
            <SubTitle>
              <Price>₹<Bold>290</Bold></Price>
              <Rating><CStar />5.0</Rating>
            </SubTitle>
            <CButton>Add To Cart</CButton>
          </InfoCont>
          {isInFavorite ? <RemoveFromWishlist /> : <AddToWishlist />}
        </Card>
        <Card>
          <Image img="https://m.media-amazon.com/images/I/41oaWXK9BgL._AC_UL480_FMwebp_QL65_.jpg" />
          <InfoCont>
            <Title>SHUBH VIVAH Sarees Super Fashion Boy </Title>
            <SubTitle>
              <Price>₹<Bold>649</Bold></Price>
              <Rating><CStar />5.0</Rating>
            </SubTitle>
            <CButton>Add To Cart</CButton>
          </InfoCont>
          {isInFavorite ? <RemoveFromWishlist /> : <AddToWishlist />}
        </Card>
      </Wrapper>
    </Container>
  )
}