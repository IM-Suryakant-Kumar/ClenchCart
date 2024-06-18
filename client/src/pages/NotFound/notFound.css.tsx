import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Stack).attrs({
  height: "calc(100vh - 6rem)",
  justifyContent: "center",
  alignItems: "center"
})``

export const Title = styled(Typography).attrs({
  className: "title",
  variant: "subtitle1",
  sx: {
    fontSize: "larger",
    textAlign: "center",
    color: "red",
  }
})`
  @media screen and (min-width: 768px) {
    &.title {
      font-size: xx-large;
    }
  }
`