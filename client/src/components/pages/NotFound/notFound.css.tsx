import { Stack } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Stack)`
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  font-size: larger;
  text-align: center;
  color: red;

  @media screen and (min-width: 768px) {
    font-size: xx-large;
  }
`