import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box).attrs({})``

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