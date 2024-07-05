import { Favorite, FavoriteBorder, Star } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box).attrs({
  sx: {
    p: "0.25em",
  }
})``

export const Heading = styled(Typography).attrs({
  variant: "h2",
  sx: {
    m: "0.25em",
    textAlign: "center",
    fontFamily: "var(--font-cinzel)",
    fontSize: "large",
    fontWeight: "bolder",
    color: "var(--color-logo)",
  }
})``

export const Wrapper = styled(Box).attrs({
  sx: {
    display: "grid",
    gridTemplateColumns: { xs: "repeat(auto-fill, minmax(15rem, 1fr))", md: "repeat(auto-fill, minmax(16rem, 1fr))" },
    gap: "0.25em",
  }
})``

export const Card = styled(Box).attrs({
  sx: {
    border: "2px solid var(--color-secondary)",
    p: "1em",
    borderRadius: "0.25em",
    boxShadow: "2px 1px 1px 1px 00000020",
    position: "relative"
  }
})``

export const Image = styled(Box).attrs({
  sx: {
    m: "1em",
    height: { xs: "10rem", sm: "12rem", md: "14rem" },
  }
}) <{ img: string }>`
  background-image: ${props => `url(${props.img})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const InfoCont = styled(Stack).attrs({
  sx: {
    gap: { xs: "0.4em", sm: "0.5em", md: "0.7em" }
  }
})``

export const Title = styled(Typography).attrs({
  variant: "body2",
  sx: {
    fontSize: "medium",
    color: "#292929",
    textShadow: "1px 1px 1px 1px #333333"
  }
})``

export const SubTitle = styled(Stack).attrs({
  direction: "row",
  justifyContent: "space-between"
})``

export const Price = styled(Box).attrs({
  sx: {
    fontSize: "larger"
  }
})``

export const Bold = styled(Box).attrs({
  component: "span",
  sx: {
    fontSize: "large",
    fontWeight: "bold",
    ml: "0.1em"
  }
})``

export const Rating = styled(Stack).attrs({
  direction: "row",
  alignItems: "center",
  gap: "0.1em",
  sx: {
    bgcolor: "var(--color-logo)",
    color: "var(--color-primary)",
    p: "0.1em 0.25em",
    borderRadius: "0.25em"
  }
})``

export const CStar = styled(Star).attrs({
  sx: {
    color: "var(--color-primary)",
  }
})``

export const CButton = styled(Button).attrs({
  variant: "contained",
  size: "small",
  sx: {
    mt: "0.7em",
    bgcolor: "var(--color-logo)",
    color: "var(--color-primary)",
    fontFamily: "var(--font-cinzel)",
    fontSize: "small"
  }
})``

export const AddToWishlist = styled(FavoriteBorder).attrs({
  sx: {
    position: "absolute",
    top: "0.5em",
    right: "0.5em",
    fontSize: "x-large",
    color: "red",
    cursor: "pointer"
  }
})``

export const RemoveFromWishlist = styled(Favorite).attrs({
  sx: {
    position: "absolute",
    top: "0.5em",
    right: "0.5em",
    fontSize: "x-large",
    color: "red",
    cursor: "pointer"
  }
})``