import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box).attrs({
  sx: {
    overflow: "hidden",
    position: "relative",
  }
})``

export const Wrapper = styled(Box).attrs({
  sx: {
    display: "flex",
    transition: "all 1s ease"
  }
})<{slideidx: number}>`
  transform: translateX(${ props => props.slideidx * -100}%);
`;

export const Card = styled(Stack).attrs({
  direction: "row",
  sx: {
    minWidth: "calc(100% - 0.5em)",
    height: { xs: "10rem", sm: "24rem" },
    border: "2px solid var(--color-logo)",
    boxShadow: "1px 1px #00000020, -1px -1px #00000020",
    borderRadius: "0.3125em",
    alignItems: "center",
    gap: "1em",
    m: "0.25em",
  }
})``

export const CardImg = styled.img.attrs({
  style: {
    width: "55%",
    height: "55%",
    objectFit: "contain",
    marginLeft: "1em"
  }
})``


export const CardInfo = styled(Stack).attrs({
  sx: {
    height: "100%",
    color: "var(--color-logo)",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.25em",
    textAlign: "center",
  }
})``

export const CardTitle = styled(Typography).attrs({
  variant: "h2",
  sx: {
    fontFamily: "var(--font-cinzel)",
    fontSize: { xs: "large", sm: "x-large" },
    fontWeight: "bold"
  }
})``

export const CardDesc = styled(Typography).attrs({
  variant: "caption",
  sx: {
    fontFamily: "var(--font-cinzel)",
    fontSize: { xs: "small", sm: "large" },
  }
})``

export const CardButton = styled(Button).attrs({
  variant: "contained",
  size: "large",
  sx: {
    bgcolor: "var(--color-logo)",
    color: "var(--color-primary)",
    fontSize: { xs: "x-small", sm: "smaller" },
    fontFamily: "var(--font-cinzel)",
    fontWeight: "bold",
    mt: "1em"
  }
})``

export const LeftArrow = styled(ChevronLeft).attrs({
  sx: {
    cursor: "pointer",
    fontSize: { xs: "1.75rem", sm: "2.5rem" },
    color: "var(--color-logo)",
    position: "absolute",
    left: "-0.05em",
    top: { xs: "calc((10rem - 1em) / 2)", sm: "calc((24rem - 1em) / 2)" }
  }
})``
export const RightArrow = styled(ChevronRight).attrs({
  sx: {
    cursor: "pointer",
    fontSize: { xs: "1.75em", sm: "2.5rem" },
    color: "var(--color-logo)",
    position: "absolute",
    right: "-0.05em",
    top: { xs: "calc((10rem - 1em) / 2)", sm: "calc((24rem - 1em) / 2)" }
  }
})``