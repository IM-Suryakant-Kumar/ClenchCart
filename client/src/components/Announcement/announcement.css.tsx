import { Box, Typography } from "@mui/material"
import styled from "styled-components"

export const Container = styled(Box)`
  padding: 0.4em;
  text-align: center;
  background: var(--color-logo);
  color: var(--color-primary);
`
export const Title = styled(Typography).attrs({
  variant: "h2"
})`

  font-size: small !important;
`