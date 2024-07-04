import { Box, Typography } from "@mui/material"
import styled from "styled-components"

export const Container = styled(Box).attrs({
  sx: {
    padding: "0.4em",
    textAlign: "center",
    bgcolor: "var(--color-logo)",
    color: "var(--color-primary)",
  }
})``

export const Title = styled(Typography).attrs({
  variant: "h2",
  sx: {
    fontSize: "small",
  }
})``