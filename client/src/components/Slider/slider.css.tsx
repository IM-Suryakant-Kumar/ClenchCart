import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box).attrs({
  sx: {
    display: "flex",
    overflow: "hidden"
  }
})``

export const Card = styled(Stack).attrs({
  direction: "row",
  sx: {
    minWidth: "calc(100% - 0.5em)",
    height: "10rem",
    border: "2px solid var(--color-logo)",
    boxShadow: "1px 1px #00000020, -1px -1px #00000020",
    borderRadius: "0.25em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1em",
    m: "0.25em",
    position: "relative"
  }
})``

export const CardImg = styled.img.attrs({
  style: {
    width: "55%",
    height: "55%",
    objectFit: "contain",
    marginLeft: "0.25em"
  }
})``


export const CardInfo = styled(Stack).attrs({
  sx: {
    maxWidth: "8rem",
    height: "100%",
    bgcolor: "var(--color-logo)",
    color: "var(--color-primary)",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.25em",
    textAlign: "center",
    borderRadius: "2em 0 0 2em",
    border: "2px solid var(--color-secondary)"
  }
})``

export const CardTitle = styled(Typography).attrs({
  variant: "h2",
  sx: {
    // color: "var(--color-logo)",
    fontFamily: "var(--font-cinzel)",
    fontSize: "large",
    fontWeight: "bold"
  }
})``
export const CardDesc = styled(Stack).attrs({})``
export const CardButton = styled(Stack).attrs({})``